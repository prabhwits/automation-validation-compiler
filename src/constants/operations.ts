export const knownOperations = [
	"ALL_IN",
	"ANY_IN",
	"ARE_UNIQUE",
	"EQUAL_TO",
	"FOLLOW_REGEX",
	"NONE_IN",
	"&&",
	"||",
];

export const knownUnaryOperations = ["ARE_UNIQUE"];
export const knownBinaryOperations = [
	"ALL_IN",
	"ANY_IN",
	"NONE_IN",
	"EQUAL_TO",
	"FOLLOW_REGEX",
];

export const operandKeywords = new Set(
	knownOperations.flatMap((op) => op.split("_"))
);
