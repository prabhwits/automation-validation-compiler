import {
	TestObjectSyntax,
	nodeReservedKeywords,
	ExternalDataSyntax,
	ConfigSyntax,
} from "../../constants/syntax";
import { buildAst } from "../../services/return-complier/ast";
import { checkValidVariables } from "../../services/return-complier/ast-functions/semantic-validations";
import { parseReturnInput } from "../../services/return-complier/parser";
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
import {
	TestObjectValidator,
	TestsValidatorDependencies,
} from "./abstract-validator";

export class RequiredFieldsValidator extends TestObjectValidator {
	async validate() {
		if (!this.targetObject[TestObjectSyntax.Name]) {
			throw new Error(
				`${TestObjectSyntax.Name} is required at path ${this.validtionPath}`
			);
		}
		if (!this.targetObject[TestObjectSyntax.Return]) {
			throw new Error(
				`${TestObjectSyntax.Return} is required at path ${this.validtionPath}`
			);
		}
	}
}

export class NameValidator extends TestObjectValidator {
	async validate() {
		if (typeof this.targetObject[TestObjectSyntax.Name] !== "string") {
			throw new Error(
				`${TestObjectSyntax.Name} should be a string at path ${this.validtionPath}`
			);
		}
		const name = this.targetObject[TestObjectSyntax.Name];
		if (name.length < 1) {
			throw new Error(
				`${TestObjectSyntax.Name} can't be a non-empty string at path ${this.validtionPath}`
			);
		}
		if (nodeReservedKeywords.has(name)) {
			throw new Error(
				`${TestObjectSyntax.Name} can't be a reserved keyword at path ${this.validtionPath}`
			);
		}
		if (!isSnakeCase(name)) {
			throw new Error(
				`${TestObjectSyntax.Name} must be in snake_case at path ${this.validtionPath}`
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
			throw new Error(
				`${TestObjectSyntax.Scope} should be a string at path ${this.validtionPath}`
			);
		}
		if (!isValidJsonPath(path)) {
			throw new Error(
				`${TestObjectSyntax.Scope} should be a valid json path at path ${this.validtionPath}`
			);
		}
		if (
			this.impossiblePaths.includes(replaceBracketsWithAsteriskNested(path))
		) {
			throw new Error(
				`${TestObjectSyntax.Scope} can't be a path that returns a array of string it must be a json path which returns a array of objects at path ${this.validtionPath}`
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
			throw new Error(
				`${TestObjectSyntax.ErrorCode} should be a number at path ${this.validtionPath}`
			);
		}
		const errorCode = this.targetObject[TestObjectSyntax.ErrorCode];
		if (!this.possibleErrorCodes.some((code) => code.code === errorCode)) {
			throw new Error(
				`${TestObjectSyntax.ErrorCode} don't exist in error codes at path ${this.validtionPath}`
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
				throw new Error(
					`${key} should be a string or array of primitives at path ${this.validtionPath}`
				);
			}
			if (typeof value === "string") {
				if (!isValidJsonPath(value)) {
					throw new Error(
						`${key} should be a valid jsonPath at ${this.validtionPath}`
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
					throw new Error(
						`${key} should be a jsonPath that returns a array of objects, at ${this.validtionPath}`
					);
				}
			}
		}
	}

	validateKey(key: string) {
		if (nodeReservedKeywords.has(key)) {
			throw new Error(
				`${key} can't be a reserved keyword at path ${this.validtionPath}`
			);
		}
		if (key.includes(" ")) {
			throw new Error(
				`${key} can't contain spaces at path ${this.validtionPath}`
			);
		}
		if (key === this.targetObject[TestObjectSyntax.Name]) {
			throw new Error(
				`${key} can't be the same as ${TestObjectSyntax.Name} at path ${this.validtionPath}`
			);
		}
		if (!isValidVariableName(key)) {
			throw new Error(
				`${key} is not a valid variable name at path ${this.validtionPath}`
			);
		}
	}
	validateExternalData(path: string, definedExternalValues: string[]) {
		const externalData = path.split(".")[2];
		if (!definedExternalValues.includes(externalData)) {
			throw new Error(
				`${externalData} is not defined in ${ConfigSyntax.SessionData} data at path ${this.validtionPath}`
			);
		}
	}
}

export class ReturnValidator extends TestObjectValidator {
	definedVariables: string[];
	stringJsonPaths: string[];
	errorDefinitions: ErrorDefinition[];
	externalVariables: string[];
	constructor(
		testObject: TestObject,
		path: string,
		stringJsonPaths: string[],
		errorDefinitions: ErrorDefinition[],
		externalVariables: string[]
	) {
		super(testObject, path);
		this.definedVariables = Object.keys(testObject).filter(
			(key) =>
				!Object.values(TestObjectSyntax).includes(key as TestObjectSyntax)
		);
		this.stringJsonPaths = stringJsonPaths;
		this.errorDefinitions = errorDefinitions;
		this.externalVariables = externalVariables;
	}
	async validate() {
		const returnStatement = this.targetObject[TestObjectSyntax.Return];
		if (typeof returnStatement === "string") {
			const cst = parseReturnInput(returnStatement);
			const ast = buildAst(cst);
			checkValidVariables(ast, this.definedVariables, this.validtionPath);
			return;
		}
		// const completeValidator = new CompleteTestObjectValidator(
		// 	returnStatement,
		// 	this.validtionPath,
		// 	this.stringJsonPaths,
		// 	this.errorDefinitions,
		// 	this.externalVariables
		// );
	}
}

export class ContinueValidator extends TestObjectValidator {
	definedVariables: string[];
	constructor(testObject: TestObject, path: string) {
		super(testObject, path);
		this.definedVariables = Object.keys(testObject).filter(
			(key) =>
				!Object.values(TestObjectSyntax).includes(key as TestObjectSyntax)
		);
	}
	async validate() {
		const contStatement = this.targetObject[TestObjectSyntax.Continue];
		if (typeof contStatement === "string") {
			const cst = parseReturnInput(contStatement);
			const ast = buildAst(cst);
			checkValidVariables(ast, this.definedVariables, this.validtionPath);
		}
	}
}

export class CompleteTestObjectValidator extends TestObjectValidator {
	stringJsonPaths: string[];
	errorDefinitions: ErrorDefinition[];
	externalVariables: string[];
	constructor(
		testObject: TestObject,
		path: string,
		dependencies: TestsValidatorDependencies
	) {
		super(testObject, path);
		this.stringJsonPaths = dependencies.stringJsonPaths;
		this.errorDefinitions = dependencies.errorDefinitions;
		this.externalVariables = dependencies.externalVariables;
	}
	validate = async () => {
		await new RequiredFieldsValidator(
			this.targetObject,
			this.validtionPath
		).validate();
		await new NameValidator(this.targetObject, this.validtionPath).validate();
		await new ScopeValidator(
			this.targetObject,
			this.validtionPath,
			this.stringJsonPaths
		).validate();
		await new ErrorCodeValidator(
			this.targetObject,
			this.validtionPath,
			this.errorDefinitions
		).validate();
		await new VariableValidator(
			this.targetObject,
			this.validtionPath,
			this.stringJsonPaths,
			this.externalVariables
		).validate();
		await new ContinueValidator(
			this.targetObject,
			this.validtionPath
		).validate();
		await new ReturnValidator(
			this.targetObject,
			this.validtionPath,
			this.stringJsonPaths,
			this.errorDefinitions,
			this.externalVariables
		).validate();
	};
}
