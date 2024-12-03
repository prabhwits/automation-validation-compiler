import { Lexer } from "chevrotain";
import { allTokens } from "./services/rename-later/tokens.js";
import CalculatorParser from "./services/rename-later/parser.js";

const input = "1 / 2 - 3";

const lexer = new Lexer(allTokens);
const { tokens } = lexer.tokenize(input);

const parser = new CalculatorParser();
parser.input = tokens;

const cst = parser.expression();

console.log(cst);
