import { AstNode, buildAst } from "./ast.js";
import { parseReturnInput } from "./parser.js";

export function buildAstFromInput(input: string): AstNode {
	const cst = parseReturnInput(input);
	const ast = buildAst(cst);
	return ast;
}
