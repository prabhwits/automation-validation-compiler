import { CstNode, CstParser, IRecognitionException } from "chevrotain";
import {
	allTokens,
	Identifier,
	CustomBinaryFunctions,
	CustomUniaryFunctions,
} from "./tokens.js";

class CustomReturnParser extends CstParser {
	public returnStatement!: () => CstNode;

	constructor() {
		super(allTokens);

		const $ = this;

		$.RULE("returnStatement", () => {
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

		// Perform self-analysis
		this.performSelfAnalysis();
	}
}

export const ReturnParser = CustomReturnParser;
