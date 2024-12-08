import {
	AstNode,
	BinnaryOperatorNode,
	CustomBinaryFunction,
	CustomUniaryFunction,
	NotOperatorNode,
	ReturnStatementNode,
} from "../../../services/return-complier/ast.js";
import { buildAstFromInput } from "../../../services/return-complier/combined.js";
import { parseReturnInput } from "../../../services/return-complier/parser.js";
import {
	AllIn,
	AnyIn,
	AreUnique,
	EqualTo,
	FollowRegex,
	GreaterThan,
	LessThan,
	NoneIn,
} from "../../../services/return-complier/tokens.js";

const uniaryFunction = {
	[AreUnique.LABEL ?? "are unique"]: "areUnique",
};
const binaryFunction = {
	[AllIn.LABEL ?? "all in"]: "allIn",
	[AnyIn.LABEL ?? "any in"]: "anyIn",
	[FollowRegex.LABEL ?? "follow regex"]: "followRegex",
	[NoneIn.LABEL ?? "none in"]: "noneIn",
	[EqualTo.LABEL ?? "equal to"]: "equalTo",
	[GreaterThan.LABEL ?? "greater than"]: "greaterThan",
	[LessThan.LABEL ?? "less than"]: "lessThan",
};

function compileToTs(node: AstNode): string {
	if (node.type === "returnStatement") {
		const returnNode = node as ReturnStatementNode;
		return compileToTs(returnNode.expression);
	}
	if (node.type === "binnaryOperator") {
		const binaryNode = node as BinnaryOperatorNode;
		const lhs = compileToTs(binaryNode.lhs);
		const rhs = compileToTs(binaryNode.rhs);
		return `(${lhs}) ${binaryNode.operator} (${rhs})`;
	}
	if (node.type === "notOperator") {
		const notNode = node as NotOperatorNode;
		const expression = compileToTs(notNode.expression);
		return `!(${expression})`;
	}
	if (node.type === "customUniaryFunction") {
		const unary = node as CustomUniaryFunction;
		const func = uniaryFunction[unary.customFunction];
		const varName = unary.expression.name;
		return `validations.${func}(${varName})`;
	}
	if (node.type === "customBinaryFunction") {
		const binary = node as CustomBinaryFunction;
		const func = binaryFunction[binary.customFunction];
		const lhs = binary.lhs.name;
		const rhs = binary.rhs.name;
		return `validations.${func}(${lhs}, ${rhs})`;
	}
	throw new Error("Unknown node type");
}

export const compileInputToTs = (input: string) => {
	const ast = buildAstFromInput(input);
	return compileToTs(ast);
};
