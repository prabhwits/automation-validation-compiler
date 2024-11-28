import { ConfigSyntax } from "../constants/syntax";

export interface CodeConfig {
	[ConfigSyntax.Name]: string;
	[ConfigSyntax.Return]: string;
	[ConfigSyntax.Scope]?: string;
	[ConfigSyntax.ErrorCode]?: number;
	[ConfigSyntax.Continue]?: string;
	[key: string]: string | string[] | number | undefined;
}
