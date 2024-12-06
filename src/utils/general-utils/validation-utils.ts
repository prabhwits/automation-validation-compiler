import { SessionDataApi } from "../../types/config-types.js";
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
	return Array.isArray(line) && line.every((item) => isPrimitive(item));
}

export function getExternalVariables(
	sessionData: Record<string, SessionDataApi>
) {
	const variables: string[] = [];
	Object.values(sessionData).forEach((session) => {
		Object.keys(session).forEach((key) => {
			if (!variables.includes(key)) {
				variables.push(key);
			}
		});
	});
	return variables;
}
