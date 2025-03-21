import { readFileSync, writeFileSync } from "fs";

import path from "path";
import { fileURLToPath } from "url";
import { SupportedLanguages } from "./types/compiler-types.js";

import { ConfigCompiler } from "./generator/config-compiler.js";
import { parseReturnInput } from "./services/return-complier/parser.js";
import { AstNode, buildAst } from "./services/return-complier/ast.js";
import { CompileToMarkdown } from "./services/return-complier/ast-functions/compile-to-markdown.js";

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main = async () => {
	const compiler = new ConfigCompiler(SupportedLanguages.Typescript);
	const buildPath = path.resolve(__dirname, "../retail/build.yaml");
	const valConfigPath = path.resolve(
		__dirname,
		"../retail/validation-config.json"
	);
	const buildYaml = readFileSync(buildPath, "utf-8");
	const valConfig = JSON.parse(readFileSync(valConfigPath, "utf-8"));
	const build = await compiler.initialize(buildYaml);
	console.log("build", build)
	await compiler.generateCode(valConfig);
	await compiler.generateL0Schema();
	await compiler.performValidations(valConfig);

	const inputs = [
		"a are unique && b are unique",
		"a are unique",
		"(a are unique && b are unique) || c are unique",
		"a are unique && b are unique || c are unique",
		"a are unique && (b are unique || c are unique)",
		"a are unique && b are unique && c are unique && d are unique",
		"a are unique && !(b are unique || !(c are unique))",
		"a are unique && (b are unique || !(!(c are unique))) && !(d are unique)",
	];

	let output = "";
	for (const input of inputs) {
		const cst = parseReturnInput(input);
		const ast = buildAst(cst);
		const out = CompileToMarkdown(ast, "A", 0, false);
		output += `\n## ${input}\n\n${out}\n`;
	}
	writeFileSync(path.resolve(__dirname, "../retail/output.md"), output);
};

(async () => {
	await main();
})();