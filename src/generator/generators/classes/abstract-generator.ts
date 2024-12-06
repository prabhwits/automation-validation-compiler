import { ValidationConfig } from "../../../types/config-types";

/*
    1. generate code for session_data 
        1. a function take in payload and update the session_data in cache
        2. get function which returns the session_data object 
    2. generate code for test-objects
        1. single test object generation
            1. handle nested 
        2. combine all the tests
*/
export abstract class CodeGenerator {
	validationConfig: ValidationConfig;
	rootPath: string;
	constructor(validationConfig: ValidationConfig, rootPath: string) {
		this.validationConfig = validationConfig;
		this.rootPath = rootPath;
	}
	abstract generateSessionDataCode(): Promise<string>;
	abstract generateValidationCode(): Promise<string>;
	abstract generateCode(): Promise<void>;
}
