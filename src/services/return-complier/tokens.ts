import {
	createToken,
	Lexer,
	ILexerErrorMessageProvider,
	IToken,
	ILexingResult,
} from "chevrotain";

export const Identifier = createToken({
	name: "Identifier",
	pattern: /[a-zA-Z_][a-zA-Z0-9_]*/,
});

export const CustomBinaryFunctions = createToken({
	name: "CustomFunctions",
	pattern: Lexer.NA,
});

export const CustomUniaryFunctions = createToken({
	name: "CustomUniaryFunctions",
	pattern: Lexer.NA,
});

export const AllIn = createToken({
	name: "AllIn",
	pattern: /all in/i,
	categories: CustomBinaryFunctions,
	label: "all in",
});

export const AnyIn = createToken({
	name: "AnyIn",
	pattern: /any in/i,
	categories: CustomBinaryFunctions,
	label: "any in",
});

export const AreUnique = createToken({
	name: "AreUnique",
	pattern: /are unique/i,
	categories: CustomUniaryFunctions,
	label: "are unique",
});

export const ArePresent = createToken({
	name: "ArePresent",
	pattern: /are present/i,
	categories: CustomUniaryFunctions,
	label: "are present",
});

export const FollowRegex = createToken({
	name: "FollowRegex",
	pattern: /follow regex/i,
	categories: CustomBinaryFunctions,
	label: "follow regex",
});

export const NoneIn = createToken({
	name: "NoneIn",
	pattern: /none in/i,
	categories: CustomBinaryFunctions,
	label: "none in",
});

export const EqualTo = createToken({
	name: "EqualTo",
	pattern: /equal to/i,
	label: "equal to",
});

export const GreaterThan = createToken({
	name: "GreaterThan",
	pattern: /greater than/i,
	label: "greater than",
});

export const LessThan = createToken({
	name: "LessThan",
	pattern: /less than/i,
	label: "less than",
});

export const WhiteSpace = createToken({
	name: "WhiteSpace",
	pattern: /\s+/,
	group: Lexer.SKIPPED,
});

export const LParen = createToken({
	name: "LParen",
	pattern: /\(/,
	label: "(",
});
export const RParen = createToken({
	name: "RParen",
	pattern: /\)/,
	label: ")",
});

export const BinaryOperator = createToken({
	name: "BinaryOperator",
	pattern: Lexer.NA,
});

export const AndOperator = createToken({
	name: "AndOperator",
	pattern: /&&/,
	categories: BinaryOperator,
	label: "&&",
});

export const OrOperator = createToken({
	name: "OrOperator",
	pattern: /\|\|/,
	categories: BinaryOperator,
	label: "||",
});

export const NotOperator = createToken({
	name: "NotOperator",
	pattern: /!/,
	label: "!",
});

export const allTokens = [
	WhiteSpace,
	LParen,
	RParen,
	AndOperator,
	OrOperator,
	NotOperator,
	AreUnique,
	ArePresent,
	AllIn,
	AnyIn,
	EqualTo,
	GreaterThan,
	LessThan,
	FollowRegex,
	NoneIn,
	CustomUniaryFunctions,
	CustomBinaryFunctions,
	BinaryOperator,
	Identifier,
];

const lexerErrorMessageProvider: ILexerErrorMessageProvider = {
	buildUnableToPopLexerModeMessage: function (token: IToken): string {
		return `Unable to pop Lexer Mode at line ${token.startLine}, column ${token.startColumn}. Token: ${token.image}.`;
	},
	buildUnexpectedCharactersMessage: function (
		fullText: string,
		startOffset: number,
		length: number,
		line: number,
		column: number
	): string {
		const unexpectedText = fullText.substring(
			startOffset,
			startOffset + length
		);
		return `Unexpected character sequence: '${unexpectedText}' at line ${line}, column ${column}.`;
	},
};
const ReturnLexer = new Lexer(allTokens, {
	errorMessageProvider: lexerErrorMessageProvider,
	positionTracking: "full",
});

export function ReturnTokenize(inputText: string) {
	const lexerResult: ILexingResult = ReturnLexer.tokenize(inputText);

	if (lexerResult.errors.length > 0) {
		const errorMessages = lexerResult.errors
			.map((error) => error.message)
			.join("\n");
		throw new Error(`Lexing errors encountered:\n${errorMessages}`);
	}
	return lexerResult;
}
