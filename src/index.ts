import { parseInput } from "./services/rename-later/return-parser.js";

const inputs = [
	"( a all in b ) && (c are unique)",
	"a all in b",
	"A all in B",
	"A are unique",
	"X follow regex reg",
	"X none in Y",
];

const cst = parseInput(inputs[0]);

console.log(cst);
