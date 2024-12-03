export const LOGICAL_OPERATORS = ["&&", "||"];
export const COMPARISON_OPERATORS = ["==", "!=", ">", ">=", "<", "<="];
export const ARITHMETIC_OPERATORS = ["+", "-", "*", "/"];
export const UNARY_OPERATORS = ["!"];

export const PREDEFINED_CONDITIONS = [
	"ALL_IN",
	"ANY_IN",
	"NONE_IN",
	"ARE_UNIQUE",
	"FOLLOW_REGEX",
];

export const OPERATORS = [
	...LOGICAL_OPERATORS,
	...COMPARISON_OPERATORS,
	...ARITHMETIC_OPERATORS,
	...UNARY_OPERATORS,
];
