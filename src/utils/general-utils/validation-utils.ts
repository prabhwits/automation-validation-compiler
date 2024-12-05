import { SessionData } from "../../types/config-types.js";
import { Primitive, ValidVariableLine } from "../../types/general-types.js";

export function isPrimitive(value: unknown): value is Primitive {
	return (
		value === null ||
		["string", "number", "boolean", "symbol", "bigint"].includes(typeof value)
	);
}

export function isValidVariableValueType(line: any): line is ValidVariableLine {
	if (typeof line === "string") {
		return true;
	}
	return isPrimitive(line);
}

export function validateSessionData(
	variable: any,
	path: string = "root"
): void {
	if (typeof variable !== "object" || variable === null) {
		throw new Error(
			`Invalid SessionData at ${path}: Expected an object, got ${typeof variable}`
		);
	}

	Object.entries(variable).forEach(([key, value]) => {
		const currentPath = `${path}.${key}`;

		if (typeof key !== "string") {
			throw new Error(
				`Invalid key at ${currentPath}: Expected a string key, got ${typeof key}`
			);
		}

		if (
			value !== null &&
			typeof value !== "string" &&
			(!Array.isArray(value) ||
				!value.every((item, index) => {
					if (!isPrimitive(item)) {
						throw new Error(
							`Invalid array value at ${currentPath}[${index}]: Expected a primitive, got ${typeof item}`
						);
					}
					return true;
				}))
		) {
			throw new Error(
				`Invalid value at ${currentPath}: ${JSON.stringify(value)}`
			);
		}
	});
}
