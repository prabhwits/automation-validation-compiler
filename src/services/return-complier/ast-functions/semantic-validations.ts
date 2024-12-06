import {
	AstNode,
	BinnaryOperatorNode,
	CustomBinaryFunction,
	CustomUniaryFunction,
	IdentifierNode,
	NotOperatorNode,
	ReturnStatementNode,
} from "../ast";

export function checkValidVariables(
	ast: AstNode,
	validVariables: string[],
	path?: string
): void {
	if (ast.type === "identifier") {
		const identifier = ast as IdentifierNode;
		if (!validVariables.includes(identifier.name)) {
			throw new Error(`Invalid variable ${identifier.name} at path ${path}`);
		}
	}
	if (ast.type === "returnStatement") {
		const returnStatement = ast as ReturnStatementNode;
		checkValidVariables(returnStatement.expression, validVariables, path);
	}
	if (ast.type === "binnaryOperator") {
		const binnaryOperator = ast as BinnaryOperatorNode;
		checkValidVariables(binnaryOperator.lhs, validVariables, path);
		checkValidVariables(binnaryOperator.rhs, validVariables, path);
	}
	if (ast.type === "notOperator") {
		const notOperator = ast as NotOperatorNode;
		checkValidVariables(notOperator.expression, validVariables, path);
	}
	if (ast.type === "customBinaryFunction") {
		const customBinaryFunction = ast as CustomBinaryFunction;
		checkValidVariables(customBinaryFunction.lhs, validVariables, path);
		checkValidVariables(customBinaryFunction.rhs, validVariables, path);
	}
	if (ast.type === "customUniaryFunction") {
		const customUniaryFunction = ast as CustomUniaryFunction;
		checkValidVariables(customUniaryFunction.expression, validVariables, path);
	}
}
