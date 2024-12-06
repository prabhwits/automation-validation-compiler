import { JSONSchema7 } from "json-schema";
import { BUID_TYPE } from "../types/build.js";
import { loadAndDereferenceYaml } from "../utils/config-utils/yaml.js";
import { SchemaExtactionService } from "../services/schema-service.js";
import { ErrorDefinition } from "../types/error-codes.js";
import { ConfigValidator } from "./validators/config-validator.js";
import { ValidationConfig } from "../types/config-types.js";

type CodeGeneratorConfig = {
	removeRequiredfromSchema: boolean;
	removeEnumsfromSchema: boolean;
};

const defaultConfig: CodeGeneratorConfig = {
	removeRequiredfromSchema: true,
	removeEnumsfromSchema: true,
};

export class ConfigCompiler {
	buildData: BUID_TYPE | undefined;
	jsonSchemas: Record<string, JSONSchema7> | undefined;
	possibleJsonPahts: Record<string, string[]> | undefined;
	errorDefinitions: ErrorDefinition[] | undefined;
	private SchemaExtactionService: SchemaExtactionService;
	constructor() {
		this.SchemaExtactionService = new SchemaExtactionService();
	}
	// 1. extract build, create schemas , extract possible paths , extract errorcodes
	initialize = async (
		buildYaml: string,
		generatorConfig: Partial<CodeGeneratorConfig> = {}
	) => {
		const finalConfig = { ...defaultConfig, ...generatorConfig };
		this.buildData = await loadAndDereferenceYaml<BUID_TYPE>(buildYaml);
		this.jsonSchemas = await this.SchemaExtactionService.extractSchemas(
			this.buildData,
			finalConfig.removeRequiredfromSchema,
			finalConfig.removeEnumsfromSchema
		);
		this.possibleJsonPahts = this.SchemaExtactionService.extractPossiblePaths(
			this.jsonSchemas
		);
		const errors = this.buildData["x-errorcodes"];
		this.errorDefinitions = errors.code;
	};

	performValidations = async (valConfig: ValidationConfig) => {
		if (!this.buildData) throw new Error("Build data not initialized");
		if (!this.jsonSchemas) throw new Error("Schemas not initialized");
		if (!this.possibleJsonPahts)
			throw new Error("Possible paths not initialized");
		if (!this.errorDefinitions)
			throw new Error("Error definitions not initialized");

		await new ConfigValidator(
			"",
			valConfig,
			this.possibleJsonPahts["stringJsonPaths"],
			this.errorDefinitions
		).validate();
	};
}
