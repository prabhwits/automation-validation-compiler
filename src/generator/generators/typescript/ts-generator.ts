import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ConfigSyntax, TestObjectSyntax } from "../../../constants/syntax.js";
import { CodeGenerator } from "../classes/abstract-generator.js";
import Mustache from "mustache";
import { markdownMessageGenerator } from "../markdown-message-generator.js";
import { getVariablesFromTest as extractVariablesFromText } from "../../../utils/general-utils/test-object-utils.js";
import { ConfigVariable, TestObject } from "../../../types/config-types.js";
import { ConvertArrayToString } from "../../../utils/general-utils/string-utils.js";

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

	generateTestFunction = async (testObject: TestObject) => {
		const template = readFileSync(
			path.resolve(__dirname, "./templates/test-object.mustache"),
			"utf-8"
		);
		const skip = testObject[TestObjectSyntax.Continue];
		const skipList = skip ? [skip] : undefined;
		const view: mustachRequirements = {
			name: testObject[TestObjectSyntax.Name],
			scopePath: testObject[TestObjectSyntax.Scope] ?? "$",
			variables: this.createVariablesCode(testObject),
			hasContinue: testObject[TestObjectSyntax.Continue] ? true : false,
			returnStatement: testObject[TestObjectSyntax.Return] as string,
			errorCode: testObject[TestObjectSyntax.ErrorCode] ?? 30000,
			errorDescription: this.CreateErrorMarkdown(testObject, skipList),
		};
		return {
			funcName: testObject[TestObjectSyntax.Name],
			code: Mustache.render(template, view),
		};
	};

	private CreateErrorMarkdown(
		testObject: TestObject,
		skipList: string[] | undefined
	) {
		return markdownMessageGenerator(
			testObject[TestObjectSyntax.Return] as string,
			testObject,
			"A",
			skipList
		);
	}

	private createVariablesCode(testObject: TestObject) {
		const variables: { name: string; value: string }[] = [];
		const varNames = extractVariablesFromText(testObject);
		for (const name of varNames) {
			const value = testObject[name] as ConfigVariable;
			const final =
				typeof value === "string"
					? `payloadUtils.getJsonPath(testObj, '${value}')`
					: ConvertArrayToString(value);
			variables.push({
				name: name,
				value: final,
			});
		}
		return variables;
	}
}

interface mustachRequirements {
	name: string;
	scopePath: string;
	variables: {
		name: string;
		value: string;
	}[];
	hasContinue: boolean;
	skipCheckStatement?: string;
	returnStatement: string;
	errorCode: number;
	errorDescription: string;
}
