import { nodeReservedKeywords } from "../../constants/syntax.js";

export function isSnakeCase(str: string): boolean {
	// Check if the string matches the pattern: lowercase letters and underscores only, no leading or trailing underscores
	const snakeCasePattern = /^[a-z0-9]+(_[a-z0-9]+)*$/;
	return snakeCasePattern.test(str);
}

export function isValidVariableName(input: string): boolean {
	// Regular expression to match valid variable names
	const validVariableNameRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

	// Check if input matches the regex
	const matchesPattern = validVariableNameRegex.test(input);

	const isNotReservedKeyword = !nodeReservedKeywords.has(input);

	return matchesPattern && isNotReservedKeyword;
}
