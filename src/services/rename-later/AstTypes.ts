import { CstNode } from "chevrotain";
import { ReturnParserInstance } from "./return-parser";

export interface AstNode {
	type:
		| "returnStatement"
		| "binnaryOperator"
		| "notOperator"
		| "customBinaryFunction"
		| "customUniaryFunction"
		| "identifier";
}

export interface returnStatementNode extends AstNode {
	expression: AstNode;
}

export interface BinnaryOperatorNode extends AstNode {
	operator: "&&" | "||";
	lhs: AstNode;
	rhs: AstNode;
}

export interface NotOperatorNode extends AstNode {
	operator: "!";
	expression: AstNode;
}

export interface CustomBinaryFunction extends AstNode {
	operator: string;
	lhs: AstNode;
	rhs: AstNode;
}

export interface CustomUniaryFunction extends AstNode {
	operator: string;
	expression: AstNode;
}

export interface IdentifierNode extends AstNode {
	name: string;
}

export class AstBuilder extends ReturnParserInstance.getBaseCstVisitorConstructor() {
	constructor() {
		super();
		this.validateVisitor();
	}

	returnStatement(ctx: any): returnStatementNode {
		return {
			type: "returnStatement",
			expression: this.visit(ctx.orExpression),
		};
	}

	orExpression(ctx: any): BinnaryOperatorNode | AstNode {
		const lhs = this.visit(ctx.lhs);
		if (ctx.operator) {
			return {
				type: "binnaryOperator",
				operator: ctx.operator[0].image,
				lhs: lhs,
				rhs: this.visit(ctx.rhs),
			};
		}
		return lhs;
	}

	andExpression(ctx: any): BinnaryOperatorNode | AstNode {
		const lhs = this.visit(ctx.lhs);
		if (ctx.operator) {
			return {
				type: "binnaryOperator",
				operator: ctx.operator[0].image,
				lhs: lhs,
				rhs: this.visit(ctx.rhs),
			};
		}
		return lhs;
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
	): returnStatementNode | CustomBinaryFunction | CustomUniaryFunction {
		if (ctx.parentheisizedExpression) {
			return this.visit(ctx.parentheisizedExpression);
		}
		if (ctx.atomicCustomExpression) {
			return this.visit(ctx.atomicCustomExpression);
		}
		throw new Error("Invalid primary expression");
	}

	parentheisizedExpression(ctx: any): returnStatementNode {
		return this.visit(ctx.returnStatement);
	}

	atomicCustomExpression(ctx: any) {}
}
