import { readFileSync } from "fs";

import path from "path";
import { fileURLToPath } from "url";
import { SupportedLanguages } from "./types/compiler-types.js";

import { ConfigCompiler } from "./generator/config-compiler.js";

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main = async () => {
	const compiler = new ConfigCompiler(SupportedLanguages.Typescript);
	const buildPath = path.resolve(__dirname, "../samples/build.yaml");
	const valConfigPath = path.resolve(
		__dirname,
		"../samples/validation-config.json"
	);
	const buildYaml = readFileSync(buildPath, "utf-8");
	const valConfig = JSON.parse(readFileSync(valConfigPath, "utf-8"));
	await compiler.initialize(buildYaml);
	await compiler.generateCode(valConfig);
	// await compiler.generateL0Schema();
	// await compiler.performValidations(valConfig);

	// const inputs = [
	// 	"a are unique && b are unique",
	// 	"a are unique",
	// 	"(a are unique && b are unique) || c are unique",
	// 	"a are unique && b are unique || c are unique",
	// 	"a are unique && (b are unique || c are unique)",
	// 	"a are unique && b are unique && c are unique && d are unique",
	// 	"a are unique && !(b are unique || !(c are unique))",
	// 	"a are unique && (b are unique || !(!(c are unique))) && !(d are unique)",
	// ];

	// let output = "";
	// for (const input of inputs) {
	// 	const cst = parseReturnInput(input);
	// 	const ast = buildAst(cst);
	// 	const out = CompileToMarkdown(ast, "A", 0, false);
	// 	output += `\n## ${input}\n\n${out}\n`;
	// }
	// writeFileSync(path.resolve(__dirname, "../samples/output.md"), output);
};

(async () => {
	await main();
})();
