import { CstNode } from "chevrotain";
import { ReturnParserInstance } from "./parser.js";

export interface AstNode {
	type:
		| "returnStatement"
		| "binaryOperator"
		| "notOperator"
		| "customBinaryFunction"
		| "customUniaryFunction"
		| "identifier";
}

export interface ReturnStatementNode extends AstNode {
	expression: AstNode;
}

export interface BinaryOperatorNode extends AstNode {
	operator: "&&" | "||";
	lhs: AstNode;
	rhs: AstNode;
}

export interface NotOperatorNode extends AstNode {
	operator: "!";
	expression: AstNode;
}

export interface CustomBinaryFunction extends AstNode {
	customFunction: string;
	lhs: IdentifierNode;
	rhs: IdentifierNode;
}

export interface CustomUniaryFunction extends AstNode {
	customFunction: string;
	expression: IdentifierNode;
}

export interface IdentifierNode extends AstNode {
	name: string;
}

export class AstBuilder extends ReturnParserInstance.getBaseCstVisitorConstructor() {
	constructor() {
		super();
		this.validateVisitor();
	}

	returnStatement(ctx: any): ReturnStatementNode {
		return {
			type: "returnStatement",
			expression: this.visit(ctx.orExpression),
		};
	}

	orExpression(ctx: any): BinaryOperatorNode | AstNode {
		let left = this.visit(ctx.lhs);
		if (!ctx.operator) return left;

		if (ctx.operator) {
			for (let i = 0; i < ctx.operator.length; i++) {
				left = {
					type: "binaryOperator",
					operator: ctx.operator[i].image,
					lhs: left,
					rhs: this.visit(ctx.rhs[i]),
				};
			}
		}
		return left;
	}

	andExpression(ctx: any): BinaryOperatorNode | AstNode {
		let left = this.visit(ctx.lhs);
		if (!ctx.operator) return left;

		if (ctx.operator) {
			for (let i = 0; i < ctx.operator.length; i++) {
				left = {
					type: "binaryOperator",
					operator: ctx.operator[i].image,
					lhs: left,
					rhs: this.visit(ctx.rhs[i]),
				};
			}
		}
		return left;
	}

	notExpression(ctx: any): NotOperatorNode | AstNode {
		if (ctx.operator) {
			return {
				type: "notOperator",
				operator: ctx.operator[0].image,
				expression: this.visit(ctx.parentheisizedExpression),
			};
		}
		return this.visit(ctx.primaryExpression);
	}

	primaryExpression(
		ctx: any
	): ReturnStatementNode | CustomBinaryFunction | CustomUniaryFunction {
		if (ctx.parentheisizedExpression) {
			return this.visit(ctx.parentheisizedExpression);
		}
		if (ctx.atomicCustomExpression) {
			return this.visit(ctx.atomicCustomExpression);
		}
		throw new Error("Invalid primary expression");
	}

	parentheisizedExpression(ctx: any): ReturnStatementNode {
		return this.visit(ctx.returnStatement);
	}

	atomicCustomExpression(
		ctx: any
	): CustomBinaryFunction | CustomUniaryFunction {
		if (ctx.rhs) {
			return {
				type: "customBinaryFunction",
				customFunction: ctx.function[0].image,
				lhs: this.visitIdentifier(ctx.lhs[0]),
				rhs: this.visitIdentifier(ctx.rhs[0]),
			};
		}
		return {
			type: "customUniaryFunction",
			customFunction: ctx.function[0].image,
			expression: this.visitIdentifier(ctx.lhs[0]),
		};
	}

	visitIdentifier(token: any): IdentifierNode {
		return {
			type: "identifier",
			name: token.image,
		};
	}
}

export function buildAst(cst: CstNode): AstNode {
	const astBuilder = new AstBuilder();
	return astBuilder.visit(cst);
}
