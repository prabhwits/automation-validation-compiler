import { nodeReservedKeywords, TestObjectSyntax } from "../../constants/syntax";
import { TestObject } from "../../types/config-types";
import { isSnakeCase } from "../../utils/general-utils/string-utils";
import { isValidJsonPath } from "../../utils/json-path-utils/paths";

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
		if (this.impossiblePaths.includes(path)) {
			throw new ValidationError(
				`${TestObjectSyntax.Scope} can't be a path that returns a array of string it must be a json path which returns a array of objects`,
				this.validtionPath
			);
		}
	}
}

export class ErrorCodeValidator extends TestObjectValidator {
	async validate() {
		if (typeof this.targetObject[TestObjectSyntax.ErrorCode] !== "string") {
			throw new ValidationError(
				`${TestObjectSyntax.ErrorCode} should be a string`,
				this.validtionPath
			);
		}
	}
}
