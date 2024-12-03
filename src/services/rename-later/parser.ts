import { CstNode, CstParser } from "chevrotain";
import { allTokens, NumberLiteral, PlusMinusOperator } from "./tokens.js";

export default class CalculatorParser extends CstParser {
	public expression!: () => CstNode;
	public additionExpression!: () => CstNode;
	public atomicExpression!: () => CstNode;
	constructor() {
		super(allTokens);
		const $ = this;

		$.RULE("expression", () => {
			$.SUBRULE($.additionExpression);
		});

		$.RULE("additionExpression", () => {
			$.SUBRULE($.atomicExpression, { LABEL: "lhs" });
			$.MANY(() => {
				$.CONSUME(PlusMinusOperator);
				$.SUBRULE2($.atomicExpression, { LABEL: "rhs" });
			});
		});

		$.RULE("atomicExpression", () => {
			$.CONSUME(NumberLiteral);
		});

		$.performSelfAnalysis();
	}
}
