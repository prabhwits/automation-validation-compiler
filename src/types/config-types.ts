import { ConfigSyntax, TestObjectSyntax } from "../constants/syntax.js";

export type TestObject = {
	[TestObjectSyntax.Name]: string;
	[TestObjectSyntax.Return]: string | TestObject[];
	[TestObjectSyntax.Scope]?: string;
	[TestObjectSyntax.ErrorCode]?: number;
	[TestObjectSyntax.Continue]?: string;
	[key: string]: string | string[] | number | TestObject[] | undefined;
};

export type TestArray = TestObject[];

export type ValidationConfig = {
	[ConfigSyntax.Tests]: TestArray;
	[ConfigSyntax.SessionData]: {
		[key: string]: string | string[] | null;
	};
};
