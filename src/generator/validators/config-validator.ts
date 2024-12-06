import { ConfigSyntax } from "../../constants/syntax.js";
import { ValidationConfig } from "../../types/config-types.js";
import { ErrorDefinition } from "../../types/error-codes.js";
import { getExternalVariables } from "../../utils/general-utils/validation-utils.js";
import {
	IValidator,
	TestsValidatorDependencies,
} from "./abstract-validator.js";
import { SessionDataValidator } from "./session-data-config/session-data-validator.js";
import { TestsValidator } from "./tests-config/test-list-validator.js";

export class ConfigValidator implements IValidator {
	validtionPath: string;
	config: ValidationConfig;
	stringJsonPaths: Record<string, string[]>;
	errorDefinitions: ErrorDefinition[];
	constructor(
		validtionPath: string,
		config: ValidationConfig,
		stringJsonPaths: Record<string, string[]>,
		errorDefinitions: ErrorDefinition[]
	) {
		this.validtionPath = validtionPath;
		this.config = config;
		this.stringJsonPaths = stringJsonPaths;
		this.errorDefinitions = errorDefinitions;
	}
	validate = async () => {
		if (!this.config[ConfigSyntax.Tests])
			throw new Error(`Tests not found in config`);
		if (!this.config[ConfigSyntax.SessionData])
			throw new Error(`SessionData not found in config`);

		const sessionData = this.config[ConfigSyntax.SessionData];
		const tests = this.config[ConfigSyntax.Tests];

		await new SessionDataValidator(
			`${this.validtionPath}/${ConfigSyntax.SessionData}`,
			sessionData
		).validate();

		const externalVariables = getExternalVariables(sessionData);

		for (const api in tests) {
			const testList = tests[api];
			const path = `${this.validtionPath}/${ConfigSyntax.Tests}/${api}`;
			const dependencies: TestsValidatorDependencies = {
				stringJsonPaths: this.stringJsonPaths[api],
				errorDefinitions: this.errorDefinitions,
				externalVariables: externalVariables,
			};
			await new TestsValidator(testList, path, dependencies).validate();
		}
	};
}
