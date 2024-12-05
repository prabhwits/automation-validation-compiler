import { TestObject } from "../../types/config-types";
import { ErrorDefinition } from "../../types/error-codes";

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

export interface TestsValidatorDependencies {
	stringJsonPaths: string[];
	errorDefinitions: ErrorDefinition[];
	externalVariables: string[];
}
