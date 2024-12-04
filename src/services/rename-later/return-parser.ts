import { CstNode, CstParser } from "chevrotain";
import {
	allTokens,
	AndOperator,
	CustomBinaryFunctions,
	CustomUniaryFunctions,
	Identifier,
	LParen,
	NotOperator,
	OrOperator,
	ReturnTokenize,
	RParen,
} from "./tokens.js";

class ReturnParser extends CstParser {
	public returnStatement!: () => CstNode;
	public orExpression!: () => CstNode;
	public andExpression!: () => CstNode;
	public notExpression!: () => CstNode;
	public primaryExpression!: () => CstNode;
	public atomicCustomExpression!: () => CstNode;
	public parentheisizedExpression!: () => CstNode;
	constructor() {
		super(allTokens);
		const $ = this;

		$.RULE("returnStatement", () => {
			$.SUBRULE($.orExpression);
		});

		$.RULE("orExpression", () => {
			$.SUBRULE($.andExpression, { LABEL: "lhs" });
			$.MANY(() => {
				$.CONSUME(OrOperator, { LABEL: "operator" });
				$.SUBRULE2($.andExpression, { LABEL: "rhs" });
			});
		});

		$.RULE("andExpression", () => {
			$.SUBRULE($.notExpression, { LABEL: "lhs" });
			$.MANY(() => {
				$.CONSUME(AndOperator, { LABEL: "operator" });
				$.SUBRULE2($.notExpression, { LABEL: "rhs" });
			});
		});

		$.notExpression = $.RULE("notExpression", () => {
			$.OR([
				{
					ALT: () => {
						$.CONSUME(NotOperator, { LABEL: "operator" });
						$.SUBRULE($.parentheisizedExpression);
					},
				},
				{
					ALT: () => {
						$.SUBRULE($.primaryExpression);
					},
				},
			]);
		});

		$.RULE("primaryExpression", () => {
			$.OR([
				{
					ALT: () => {
						$.SUBRULE($.parentheisizedExpression);
					},
				},
				{
					ALT: () => {
						$.SUBRULE($.atomicCustomExpression);
					},
				},
			]);
		});

		$.RULE("parentheisizedExpression", () => {
			$.CONSUME(LParen);
			$.SUBRULE($.returnStatement);
			$.CONSUME(RParen);
		});

		$.RULE("atomicCustomExpression", () => {
			$.OR([
				{
					ALT: () => {
						$.CONSUME1(Identifier, { LABEL: "lhs" });
						$.CONSUME(CustomBinaryFunctions);
						$.CONSUME2(Identifier, { LABEL: "rhs" });
					},
				},
				{
					ALT: () => {
						$.CONSUME3(Identifier, { LABEL: "lhs" });
						$.CONSUME(CustomUniaryFunctions);
					},
				},
			]);
		});

		$.performSelfAnalysis();
	}
}

export const ReturnParserInstance = new ReturnParser();

export function parseInput(inputText: string) {
	// Step 1: Tokenize the input
	const lexResult = ReturnTokenize(inputText);

	// Step 3: Set the parser's input
	ReturnParserInstance.input = lexResult.tokens;

	// Step 4: Parse the input starting from the 'returnStatement' rule
	const cst = ReturnParserInstance.returnStatement();

	// Step 5: Check for parsing errors
	if (ReturnParserInstance.errors.length > 0) {
		const parseErrors = ReturnParserInstance.errors
			.map((error) => error.message)
			.join("\n");
		throw new Error(`Parsing errors detected:\n${parseErrors}`);
	}

	// If no errors, return the CST
	return cst;
}
