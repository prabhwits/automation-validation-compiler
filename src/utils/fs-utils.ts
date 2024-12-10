import fs from "fs-extra";
import * as path from "path";
import prettier from "prettier";
import logger from "./logger.js";

export function writeFileWithFsExtra(
	rootPath: string,
	relativeFilePath: string,
	content: string
): void {
	// Resolve the full file path
	const filePath = path.resolve(rootPath, relativeFilePath);
	logger.debug(`Writing file to ${filePath}`);
	fs.outputFileSync(filePath, content);
}

export async function formatCode(code: string, lang: string) {
	return await prettier.format(code, {
		parser: lang,
		tabWidth: 4,
	});
}

export async function writeAndFormatCode(
	rootPath: string,
	relativeFilePath: string,
	content: string,
	lang: string
) {
	const formattedCode = await formatCode(content, lang);
	writeFileWithFsExtra(rootPath, relativeFilePath, formattedCode);
}
