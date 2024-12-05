import { ConfigSyntax, TestObjectSyntax } from "../../constants/syntax";
import { TestObject } from "../../types/config-types";
import { ErrorDefinition } from "../../types/error-codes";
import { CompleteTestObjectValidator } from "./test-object-validators";

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

export class TestsValidator implements IValidator {
	tests: TestObject[];
	validtionPath: string;
	dependencies: TestsValidatorDependencies;
	constructor(
		tests: TestObject[],
		configPath: string,
		dependencies: TestsValidatorDependencies
	) {
		this.tests = tests;
		this.validtionPath = configPath;
		this.dependencies = dependencies;
	}
	validate = async () => {
		this.validateDuplicateNames();
		let i = 0;
		for (const test of this.tests) {
			const newPath = `${this.validtionPath}/${i}/${TestObjectSyntax.Name} = ${
				test[TestObjectSyntax.Name]
			}`;
			await new CompleteTestObjectValidator(
				test,
				newPath,
				this.dependencies
			).validate();
			i++;
		}
	};

	validateDuplicateNames = () => {
		const seen = new Set();
		const duplicates = new Set();

		this.tests.forEach((test) => {
			const name = test[TestObjectSyntax.Name];
			if (seen.has(name)) {
				duplicates.add(name); // Add to duplicates if already seen
			} else {
				seen.add(name); // Track seen names
			}
		});

		if (duplicates.size > 0) {
			throw new Error(
				`Duplicate test names found at ${this.validtionPath}: ${[
					...duplicates,
				].join(", ")}`
			);
		}
	};
}
