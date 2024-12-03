import { ReturnLexer } from "./services/rename-later/tokens.js";
import { ReturnParser } from "./services/rename-later/parser.js";

const inputs = [
	"a are unique s",
	"A all in B",
	"A are unique",
	"X follow regex reg",
	"X none in Y",
];
const { tokens } = ReturnLexer.tokenize(inputs[0]);
const parser = new ReturnParser();
parser.input = tokens;

const cst = parser.returnStatement();

console.log(cst);
