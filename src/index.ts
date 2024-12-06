import { readFileSync } from "fs";
import { ConfigCompiler } from "./Generator/config-compiler.js";
import path from "path";
import { fileURLToPath } from "url";
import { SupportedLanguages } from "./types/compiler-types.js";

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
	await compiler.performValidations(valConfig);
};

(async () => {
	await main();
})();
