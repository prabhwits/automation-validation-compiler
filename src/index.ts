import { checkValidVariables } from "./services/return-complier/ast-functions/semantic-validations.js";
import { buildAst } from "./services/return-complier/ast.js";
import { parseReturnInput } from "./services/return-complier/parser.js";

const inputs = [
	"( a all in b ) && (c are unique)",
	"a all in b",
	"A all in B",
	"A are unique",
	"X follow regex reg",
	"X none in Y",
];

const cst = parseReturnInput(inputs[0]);
const ast = buildAst(cst);

try {
	checkValidVariables(ast, ["a", "b", "c"], "path");
} catch (e) {
	console.log(e);
}
