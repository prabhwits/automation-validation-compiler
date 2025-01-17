import { TestObjectSyntax } from "../../../constants/syntax.js";
import { TestObject } from "../../../types/config-types.js";
import {
	IValidator,
	TestsValidatorDependencies,
} from "../abstract-validator.js";
import { CompleteTestObjectValidator } from "./test-validator.js";

export class TestsValidator implements IValidator {
	tests: TestObject[];
	validationPath: string;
	dependencies: TestsValidatorDependencies;
	constructor(
		tests: TestObject[],
		configPath: string,
		dependencies: TestsValidatorDependencies
	) {
		this.tests = tests;
		this.validationPath = configPath;
		this.dependencies = dependencies;
	}
	validate = async () => {
		this.validateDuplicateNames();
		let i = 0;
		for (const test of this.tests) {
			const newPath = `${this.validationPath}/${i}/${TestObjectSyntax.Name} = ${
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
				`Duplicate test names found at ${this.validationPath}: ${[
					...duplicates,
				].join(", ")}`
			);
		}
	};
}
