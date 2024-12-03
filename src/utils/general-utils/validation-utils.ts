type Primitive = number | string | boolean | null | symbol | bigint;
type NonObjectArray = Primitive[];
type ValidVariableLine = string | Primitive[];

function isPrimitive(value: unknown): value is Primitive {
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
