import { createToken, Lexer } from "chevrotain";

export const NumberLiteral = createToken({
	name: "NumberLiteral",
	pattern: /[0-9]+/,
});

export const PlusMinusOperator = createToken({
	name: "PlusMinusOperator",
	pattern: Lexer.NA,
});

export const Plus = createToken({
	name: "Plus",
	pattern: /\+/,
	categories: PlusMinusOperator,
});

export const Minus = createToken({
	name: "Minus",
	pattern: /-/,
	categories: PlusMinusOperator,
});

export const WhiteSpace = createToken({
	name: "WhiteSpace",
	pattern: /\s+/,
	line_breaks: true,
	group: Lexer.SKIPPED,
});

export const allTokens = [
	Plus,
	Minus,
	NumberLiteral,
	PlusMinusOperator,
	WhiteSpace,
];
