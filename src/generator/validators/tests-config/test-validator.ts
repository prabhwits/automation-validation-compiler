import { TestObject } from "../../../types/config-types.js";
import {
	TestObjectValidator,
	TestsValidatorDependencies,
} from "../abstract-validator.js";
import {
	RequiredFieldsValidator,
	NameValidator,
	ScopeValidator,
	ErrorCodeValidator,
	VariableValidator,
	ContinueValidator,
	ReturnValidator,
} from "./sub-validations.js";

export class CompleteTestObjectValidator extends TestObjectValidator {
	dependencies: TestsValidatorDependencies;
	constructor(
		testObject: TestObject,
		path: string,
		dependencies: TestsValidatorDependencies
	) {
		super(testObject, path);
		this.dependencies = dependencies;
	}
	validate = async () => {
		await new RequiredFieldsValidator(
			this.targetObject,
			this.validtionPath
		).validate();
		await new NameValidator(this.targetObject, this.validtionPath).validate();
		await new ScopeValidator(
			this.targetObject,
			this.validtionPath,
			this.dependencies.stringJsonPaths
		).validate();
		await new ErrorCodeValidator(
			this.targetObject,
			this.validtionPath,
			this.dependencies.errorDefinitions
		).validate();
		await new VariableValidator(
			this.targetObject,
			this.validtionPath,
			this.dependencies.stringJsonPaths,
			this.dependencies.externalVariables
		).validate();
		await new ContinueValidator(
			this.targetObject,
			this.validtionPath
		).validate();
		await new ReturnValidator(
			this.targetObject,
			this.validtionPath,
			this.dependencies
		).validate();
	};
}
