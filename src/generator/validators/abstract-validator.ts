import {
	ConfigSyntax,
	ExternalDataSyntax,
	nodeReservedKeywords,
	TestObjectSyntax,
} from "../../constants/syntax";
import { TestObject } from "../../types/config-types";
import { ErrorDefinition } from "../../types/error-codes";
import {
	isSnakeCase,
	isValidVariableName,
} from "../../utils/general-utils/string-utils";
import { isValidVariableValueType } from "../../utils/general-utils/validation-utils";
import {
	isValidJsonPath,
	replaceBracketsWithAsteriskNested,
} from "../../utils/json-path-utils/paths";

export interface IValidator {
	validtionPath: string;
	validate(): Promise<void>;
}

export abstract class TestObjectValidator implements IValidator {
	targetObject: TestObject;
	validtionPath: string;
	abstract validate(): Promise<void>;
	constructor(testObject: TestObject, path: string) {
		this.targetObject = testObject;
		this.validtionPath = path;
	}
}

export class RequiredFieldsValidator extends TestObjectValidator {
	async validate() {
		if (!this.targetObject[TestObjectSyntax.Name]) {
			throw new ValidationError(
				`${TestObjectSyntax.Name} is required`,
				this.validtionPath
			);
		}
		if (!this.targetObject[TestObjectSyntax.Return]) {
			throw new ValidationError(
				`${TestObjectSyntax.Return} is required`,
				this.validtionPath
			);
		}
	}
}

export class NameValidator extends TestObjectValidator {
	async validate() {
		if (typeof this.targetObject[TestObjectSyntax.Name] !== "string") {
			throw new ValidationError(
				`${TestObjectSyntax.Name} should be a string`,
				this.validtionPath
			);
		}
		const name = this.targetObject[TestObjectSyntax.Name];
		if (name.length < 1) {
			throw new ValidationError(
				`${TestObjectSyntax.Name} can't be a non-empty string`,
				this.validtionPath
			);
		}
		if (nodeReservedKeywords.has(name)) {
			throw new ValidationError(
				`${TestObjectSyntax.Name} can't be a reserved keyword`,
				this.validtionPath
			);
		}
		if (!isSnakeCase(name)) {
			throw new ValidationError(
				`${TestObjectSyntax.Name} must be in snake_case`,
				this.validtionPath
			);
		}
	}
}

export class ScopeValidator extends TestObjectValidator {
	impossiblePaths: string[];
	constructor(testObject: TestObject, path: string, impossiblePaths: string[]) {
		super(testObject, path);
		this.impossiblePaths = impossiblePaths;
	}
	async validate() {
		const path = this.targetObject[TestObjectSyntax.Scope];
		if (path !== "string") {
			throw new ValidationError(
				`${TestObjectSyntax.Scope} should be a string`,
				this.validtionPath
			);
		}
		if (!isValidJsonPath(path)) {
			throw new ValidationError(
				`${TestObjectSyntax.Scope} should be a valid json path`,
				this.validtionPath
			);
		}
		if (
			this.impossiblePaths.includes(replaceBracketsWithAsteriskNested(path))
		) {
			throw new ValidationError(
				`${TestObjectSyntax.Scope} can't be a path that returns a array of string it must be a json path which returns a array of objects`,
				this.validtionPath
			);
		}
	}
}

export class ErrorCodeValidator extends TestObjectValidator {
	possibleErrorCodes: ErrorDefinition[];
	constructor(
		testObject: TestObject,
		path: string,
		possibleErrorCodes: ErrorDefinition[]
	) {
		super(testObject, path);
		this.possibleErrorCodes = possibleErrorCodes;
	}
	async validate() {
		if (!this.targetObject[TestObjectSyntax.ErrorCode]) {
			return;
		}
		if (typeof this.targetObject[TestObjectSyntax.ErrorCode] !== "number") {
			throw new ValidationError(
				`${TestObjectSyntax.ErrorCode} should be a number`,
				this.validtionPath
			);
		}
		const errorCode = this.targetObject[TestObjectSyntax.ErrorCode];
		if (!this.possibleErrorCodes.some((code) => code.code === errorCode)) {
			throw new ValidationError(
				`${TestObjectSyntax.ErrorCode} don't exist in error codes`,
				this.validtionPath
			);
		}
	}
}

export class VariableValidator extends TestObjectValidator {
	possibleJsonPaths: string[];
	externalVariables: string[];
	constructor(
		testObject: TestObject,
		path: string,
		posibleJsonPaths: string[],
		externalVariables: string[]
	) {
		super(testObject, path);
		this.externalVariables = externalVariables;
		this.possibleJsonPaths = posibleJsonPaths;
	}
	async validate() {
		for (const key in this.targetObject) {
			if (Object.values(TestObjectSyntax).includes(key as TestObjectSyntax)) {
				continue;
			}
			this.validateKey(key);
			const value = this.targetObject[key];
			if (!isValidVariableValueType(value)) {
				throw new ValidationError(
					`${key} should be a string or array of primitives`,
					this.validtionPath
				);
			}
			if (typeof value === "string") {
				if (!isValidJsonPath(value)) {
					throw new ValidationError(
						`${key} should be a valid json path`,
						this.validtionPath
					);
				}
				if (value.startsWith(`$.${ExternalDataSyntax}`)) {
					this.validateExternalData(value, this.externalVariables);
					return;
				}
				if (
					!this.possibleJsonPaths.includes(
						replaceBracketsWithAsteriskNested(value)
					)
				) {
					throw new ValidationError(
						`${key} should be a json path that returns a array of objects,recheck the path`,
						this.validtionPath
					);
				}
			}
		}
	}

	validateKey(key: string) {
		if (nodeReservedKeywords.has(key)) {
			throw new ValidationError(
				`${key} can't be a reserved keyword`,
				this.validtionPath
			);
		}
		if (key.includes(" ")) {
			throw new ValidationError(
				`${key} can't contain spaces`,
				this.validtionPath
			);
		}
		if (key === this.targetObject[TestObjectSyntax.Name]) {
			throw new ValidationError(
				`${key} can't be the same as ${TestObjectSyntax.Name}`,
				this.validtionPath
			);
		}
		if (!isValidVariableName(key)) {
			throw new ValidationError(
				`${key} is not a valid variable name`,
				this.validtionPath
			);
		}
	}
	validateExternalData(path: string, definedExternalValues: string[]) {
		const externalData = path.split(".")[2];
		if (!definedExternalValues.includes(externalData)) {
			throw new ValidationError(
				`${externalData} is not defined in ${ConfigSyntax.SessionData} data`,
				this.validtionPath
			);
		}
	}
}

export class ReturnValidator extends TestObjectValidator {
	definedVariables: string[];
	constructor(
		testObject: TestObject,
		path: string,
		definedVariables: string[]
	) {
		super(testObject, path);
		this.definedVariables = definedVariables;
	}
	async validate() {}
}
