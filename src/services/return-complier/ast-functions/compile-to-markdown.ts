import logger from "../../../utils/logger.js";
import {
	AstNode,
	BinnaryOperatorNode,
	CustomBinaryFunction,
	CustomUniaryFunction,
	NotOperatorNode,
	ReturnStatementNode,
} from "../ast.js";
import {
	AllIn,
	AnyIn,
	AreUnique,
	EqualTo,
	FollowRegex,
	GreaterThan,
	LessThan,
	NoneIn,
} from "../tokens.js";

const uniaryMessages = {
	[AreUnique.LABEL ?? "are unique"]: (variable: string, forNot: boolean) =>
		`{{{${variable}}}} must${forNot ? "**not**" : ""} be unique`,
};
const binaryMessages = {
	[AllIn.LABEL ?? "all in"]: (lhs: string, rhs: string, forNot: boolean) =>
		`every element of {{{${lhs}}}} must${
			forNot ? "**not**" : ""
		} be in {{{${rhs}}}}`,
	[AnyIn.LABEL ?? "any in"]: (lhs: string, rhs: string, forNot: boolean) =>
		`at least one element of {{{${lhs}}}} must${
			forNot ? "**not**" : ""
		} be in {{{${rhs}}}}`,
	[FollowRegex.LABEL ?? "follow regex"]: (
		lhs: string,
		rhs: string,
		forNot: boolean
	) =>
		`all elements of {{{${lhs}}}} must${
			forNot ? "**not**" : ""
		} follow every regex in {{{${rhs}}}}`,
	[NoneIn.LABEL ?? "none in"]: (lhs: string, rhs: string, forNot: boolean) =>
		`no element of {{{${lhs}}}} must${
			forNot ? "**not**" : ""
		} be in {{{${rhs}}}}`,
	[EqualTo.LABEL ?? "equal to"]: (lhs: string, rhs: string, forNot: boolean) =>
		`{{{${lhs}}}} must${forNot ? "**not**" : ""} be equal to {{{${rhs}}}}`,
	[GreaterThan.LABEL ?? "greater than"]: (
		lhs: string,
		rhs: string,
		forNot: boolean
	) =>
		`{{{${lhs}}}} must${forNot ? "**not**" : ""} be greater than {{{${rhs}}}}`,
	[LessThan.LABEL ?? "less than"]: (
		lhs: string,
		rhs: string,
		forNot: boolean
	) => `{{{${lhs}}}} must${forNot ? "**not**" : ""} be less than {{{${rhs}}}}`,
};

export function CompileToMarkdown(
	ast: AstNode,
	pointer: string,
	depth = 0,
	forNot: boolean
): string {
	const indent = "  ".repeat(depth); // 2 spaces per depth level

	// Helper function to indent multi-line strings
	function indentMultilineString(str: string, indentLevel: number): string {
		const subIndent = "  ".repeat(indentLevel);
		return str
			.split("\n")
			.map((line) => subIndent + line)
			.join("\n");
	}

	if (ast.type === "returnStatement") {
		const returnStatement = ast as ReturnStatementNode;
		const generated = CompileToMarkdown(
			returnStatement.expression,
			`${pointer}`,
			depth,
			forNot
		);
		return `${generated}`;
	}
	if (ast.type === "binnaryOperator") {
		const binary = ast as BinnaryOperatorNode;
		const subMdLhs = CompileToMarkdown(
			binary.lhs,
			getNextPointer(pointer, 1),
			depth + 1,
			forNot
		);
		const subMdRhs = CompileToMarkdown(
			binary.rhs,
			getNextPointer(pointer, 2),
			depth + 1,
			forNot
		);

		const indentedSubMdLhs = indentMultilineString(subMdLhs, 0); // LHS already indented
		const indentedSubMdRhs = indentMultilineString(subMdRhs, 0); // RHS already indented

		if (binary.operator === "&&") {
			return `${indent}- **condition ${pointer}**: all of the following sub conditions must${
				forNot ? "**not**" : ""
			} be met:\n\n${indentedSubMdLhs}\n${indentedSubMdRhs}`;
		}
		if (binary.operator === "||") {
			return `${indent}- **condition ${pointer}**: any one of the following sub conditions must${
				forNot ? "**not**" : ""
			} be met:\n\n${indentedSubMdLhs}\n${indentedSubMdRhs}`;
		}
	}
	if (ast.type === "notOperator") {
		const not = ast as NotOperatorNode;
		return CompileToMarkdown(not.expression, pointer, depth, !forNot);
	}
	if (ast.type === "customUniaryFunction") {
		const customFunction = ast as CustomUniaryFunction;
		const func = customFunction.customFunction;
		const messageFunction = uniaryMessages[func as keyof typeof uniaryMessages];
		const lhs = customFunction.expression;
		return `${indent}- **condition ${pointer}**: ${messageFunction(
			lhs.name,
			forNot
		)}`;
	}
	if (ast.type === "customBinaryFunction") {
		const customFunction = ast as CustomBinaryFunction;
		const func = customFunction.customFunction;
		const messageFunction = binaryMessages[func as keyof typeof binaryMessages];
		const lhs = customFunction.lhs;
		const rhs = customFunction.rhs;
		return `${indent}- **condition ${pointer}**: ${messageFunction(
			lhs.name,
			rhs.name,
			forNot
		)}`;
	}

	throw new Error("Invalid AST node:" + JSON.stringify(ast));
}

function getNextPointer(currentPointer: string, nextIndex: number): string {
	return `${currentPointer}.${nextIndex}`;
}
