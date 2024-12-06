import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { ConfigSyntax, TestObjectSyntax } from "../../../constants/syntax.js";
import { CodeGenerator } from "../classes/abstract-generator.js";
import Mustache from "mustache";
import logger from "../../../utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class TypescriptGenerator extends CodeGenerator {
	generateSessionDataCode(): Promise<string> {
		throw new Error("Method not implemented.");
	}
	generateValidationCode(): Promise<string> {
		throw new Error("Method not implemented.");
	}
	generateCode(): Promise<void> {
		throw new Error("Method not implemented.");
	}

	generateTestObject = async () => {
		const testObject = this.validationConfig[ConfigSyntax.Tests].search[0];
		const template = readFileSync(
			path.resolve(__dirname, "./templates/test-object.mustache"),
			"utf-8"
		);
		const view: mustachRequirements = {
			name: testObject[TestObjectSyntax.Name],
			scopePath: testObject[TestObjectSyntax.Scope] ?? "$",
			variables: [],
			hasContinue: testObject[TestObjectSyntax.Continue] ? true : false,
			returnStatement: testObject[TestObjectSyntax.Return] as string,
			errorCode: testObject[TestObjectSyntax.ErrorCode] ?? 30000,
			errorDescription: "Error description",
		};
		const output = Mustache.render(template, view);
		logger.debug(output);
	};
}

interface mustachRequirements {
	name: string;
	scopePath: string;
	variables: {
		name: string;
		path: string;
	}[];
	hasContinue: boolean;
	skipCheckStatement?: string;
	returnStatement: string;
	errorCode: number;
	errorDescription: string;
}
