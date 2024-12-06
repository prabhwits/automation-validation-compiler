import { CodeGenerator } from "../classes/abstract-generator";

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
}
