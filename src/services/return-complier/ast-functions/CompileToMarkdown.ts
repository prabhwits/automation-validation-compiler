import { Primitive } from "../../../types/general-types";
import { AstNode } from "../ast";

const messages = {
	"&&": "",
	"||": "",
	"!": "",
	AllIn: "",
	AreUnique: "",
	NoneIn: "",
};

export function CompileToMarkdown(
	ast: AstNode,
	validVariables: Record<string, string | Primitive[]>
) {}
