import { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { remove } from "winston";

/**
 * Recursively removes all "required" and "enum" properties from a JSON Schema.
 * @param schema - The JSON Schema object to process.
 * @returns A new JSON Schema object with "required" and "enum" properties removed.
 */
export function removeRequiredAndEnum(
	schema: JSONSchema7 | boolean,
	removeEnums: boolean = true,
	removeRequired: boolean = true
): JSONSchema7 | boolean {
	if (typeof schema === "boolean") {
		// Boolean schemas are returned as is
		return schema;
	}

	// Create a shallow copy to avoid mutating the original schema
	const cleanedSchema: JSONSchema7 = { ...schema };

	// Remove "required" and "enum" properties
	if (removeRequired) {
		delete cleanedSchema.required;
	}
	if (removeEnums) {
		delete cleanedSchema.enum;
	}

	// Helper function to process child schemas
	const processSchema = (
		subSchema: JSONSchema7Definition
	): JSONSchema7Definition => {
		return removeRequiredAndEnum(subSchema, removeEnums, removeRequired);
	};

	// Process "properties"
	if (cleanedSchema.properties) {
		const newProperties: { [key: string]: JSONSchema7Definition } = {};
		for (const key in cleanedSchema.properties) {
			newProperties[key] = processSchema(cleanedSchema.properties[key]);
		}
		cleanedSchema.properties = newProperties;
	}

	// Process "patternProperties"
	if (cleanedSchema.patternProperties) {
		const newPatternProperties: { [key: string]: JSONSchema7Definition } = {};
		for (const key in cleanedSchema.patternProperties) {
			newPatternProperties[key] = processSchema(
				cleanedSchema.patternProperties[key]
			);
		}
		cleanedSchema.patternProperties = newPatternProperties;
	}

	// Process "additionalProperties"
	if (
		typeof cleanedSchema.additionalProperties === "object" &&
		cleanedSchema.additionalProperties !== null
	) {
		cleanedSchema.additionalProperties = removeRequiredAndEnum(
			cleanedSchema.additionalProperties,
			removeEnums,
			removeRequired
		);
	}

	// Process "items"
	if (cleanedSchema.items) {
		if (Array.isArray(cleanedSchema.items)) {
			cleanedSchema.items = cleanedSchema.items.map((item) =>
				removeRequiredAndEnum(item, removeEnums, removeRequired)
			);
		} else {
			cleanedSchema.items = removeRequiredAndEnum(
				cleanedSchema.items,
				removeEnums,
				removeRequired
			);
		}
	}

	// Process "additionalItems"
	if (
		typeof cleanedSchema.additionalItems === "object" &&
		cleanedSchema.additionalItems !== null
	) {
		cleanedSchema.additionalItems = removeRequiredAndEnum(
			cleanedSchema.additionalItems,
			removeEnums,
			removeRequired
		);
	}

	// Process combiners: "allOf", "anyOf", "oneOf"
	["allOf", "anyOf", "oneOf"].forEach((combiner) => {
		if (
			cleanedSchema[combiner as keyof JSONSchema7] &&
			Array.isArray(cleanedSchema[combiner as keyof JSONSchema7])
		) {
			// @ts-ignore
			cleanedSchema[combiner as keyof JSONSchema7] = (
				cleanedSchema[combiner as keyof JSONSchema7] as JSONSchema7[]
			).map((subSchema) =>
				removeRequiredAndEnum(subSchema, removeEnums, removeRequired)
			);
		}
	});

	// Process "not"
	if (cleanedSchema.not) {
		cleanedSchema.not = removeRequiredAndEnum(
			cleanedSchema.not,
			removeEnums,
			removeRequired
		);
	}

	// Process "definitions"
	if (cleanedSchema.definitions) {
		const newDefinitions: { [key: string]: JSONSchema7Definition } = {};
		for (const key in cleanedSchema.definitions) {
			newDefinitions[key] = processSchema(cleanedSchema.definitions[key]);
		}
		cleanedSchema.definitions = newDefinitions;
	}
	// Process "if", "then", "else"
	["if", "then", "else"].forEach((keyword) => {
		if (cleanedSchema[keyword as keyof JSONSchema7]) {
			// @ts-ignore
			cleanedSchema[keyword as keyof JSONSchema7] = removeRequiredAndEnum(
				cleanedSchema[keyword as keyof JSONSchema7] as JSONSchema7,
				removeEnums,
				removeRequired
			);
		}
	});

	// Process "contains"
	if (cleanedSchema.contains) {
		cleanedSchema.contains = removeRequiredAndEnum(
			cleanedSchema.contains,
			removeEnums,
			removeRequired
		);
	}

	return cleanedSchema;
}
