import { TestObjectSyntax } from "../../constants/syntax.js";
import { TestObject } from "../../types/config-types.js";

export function getVariablesFromTest(testObject: TestObject) {
	const variables: string[] = [];
	const keys = Object.keys(testObject);
	for (const key of keys) {
		if (Object.values(TestObjectSyntax).includes(key as TestObjectSyntax)) {
			continue;
		}
		variables.push(key);
	}
	return variables;
}
