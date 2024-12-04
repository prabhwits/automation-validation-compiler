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

export const AreUnique = createToken({
	name: "AreUnique",
	pattern: /are unique/i,
	categories: CustomUniaryFunctions,
	label: "are unique",
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

export const BinnaryOperator = createToken({
	name: "BinnaryOperator",
	pattern: Lexer.NA,
});

export const AndOperator = createToken({
	name: "AndOperator",
	pattern: /&&/,
	categories: BinnaryOperator,
	label: "&&",
});

export const OrOperator = createToken({
	name: "OrOperator",
	pattern: /\|\|/,
	categories: BinnaryOperator,
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
	AllIn,
	AreUnique,
	FollowRegex,
	NoneIn,
	CustomUniaryFunctions,
	CustomBinaryFunctions,
	BinnaryOperator,
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
