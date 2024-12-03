import {
	createToken,
	Lexer,
	ILexerErrorMessageProvider,
	IToken,
	TokenType,
} from "chevrotain";

export const Identifier = createToken({
	name: "Identifier",
	pattern: /[A-Z]\w*/,
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
});

export const AreUnique = createToken({
	name: "AreUnique",
	pattern: /are unique/i,
	categories: CustomUniaryFunctions,
});

export const FollowRegex = createToken({
	name: "FollowRegex",
	pattern: /follow regex/i,
	categories: CustomBinaryFunctions,
});

export const NoneIn = createToken({
	name: "NoneIn",
	pattern: /none in/i,
	categories: CustomBinaryFunctions,
});

export const WhiteSpace = createToken({
	name: "WhiteSpace",
	pattern: /\s+/,
	group: Lexer.SKIPPED,
});

export const allTokens = [
	WhiteSpace,
	Identifier,
	AllIn,
	AreUnique,
	FollowRegex,
	NoneIn,
	CustomUniaryFunctions,
	CustomBinaryFunctions,
];

// Custom error message provider for the lexer
const lexerErrorMessageProvider: ILexerErrorMessageProvider = {
	buildUnableToPopLexerModeMessage: function (token: IToken): string {
		return `Unable to pop Lexer Mode. Token: ${token.image}.`;
	},
	buildUnexpectedCharactersMessage: function (
		fullText: string,
		startOffset: number,
		length: number
	): string {
		const unexpectedText = fullText.substring(
			startOffset,
			startOffset + length
		);
		return `Unexpected character sequence: '${unexpectedText}' at position ${startOffset}.`;
	},
};

export const ReturnLexer = new Lexer(allTokens, {
	errorMessageProvider: lexerErrorMessageProvider,
});
