import { SessionData } from "../../../types/config-types.js";
import { validateSessionData } from "../../../utils/general-utils/validation-utils.js";
import { IValidator } from "../abstract-validator.js";

export class SessionDataValidator implements IValidator {
	validtionPath: string;
	sessionData: SessionData;
	constructor(validtionPath: string, sessionData: SessionData) {
		this.validtionPath = validtionPath;
		this.sessionData = sessionData;
	}
	validate = async () => {
		validateSessionData(this.sessionData, this.validtionPath);
	};
}
