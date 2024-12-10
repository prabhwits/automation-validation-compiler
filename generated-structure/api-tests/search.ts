import { validationInput, validationOutput } from "../types/test-config";

export type testFunctionArray = Array<
	(input: validationInput) => validationOutput
>;

function test(input: validationInput): validationOutput {
	const scope = input.payload;
	for (const testObj of scope) {
		let invalidResults: validationOutput = [];
		const testFunctions: testFunctionArray = [];
		for (const fn of testFunctions) {
			const subResult = fn(input).filter((r) => !r.valid);
			invalidResults = [...invalidResults, ...subResult];
			if (!input.config.runAllValidations && invalidResults.length > 0) {
				return invalidResults;
			}
		}
		if (invalidResults.length > 0) {
			return invalidResults;
		}
	}
	return [{ valid: true }];
}
