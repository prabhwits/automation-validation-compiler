import { SessionDataApi } from "../../../types/config-types.js";
import { isPrimitive } from "../../../utils/general-utils/validation-utils.js";

import { IValidator } from "../abstract-validator.js";

export class SessionDataValidator implements IValidator {
	validationPath: string;
	sessionData: Record<string, SessionDataApi>;
	constructor(
		validtionPath: string,
		sessionData: Record<string, SessionDataApi>
	) {
		this.validationPath = validtionPath;
		this.sessionData = sessionData;
	}
	validate = async () => {
		Object.entries(this.sessionData).forEach(([key, value]) => {
			const newPath = `${this.validationPath}/${key}`;
			this.validateSessionData(value, newPath);
		});
	};

	private validateSessionData(variable: any, path: string): void {
		if (typeof variable !== "object" || variable === null) {
			throw new Error(
				`Invalid SessionData at ${path}: Expected an object, got ${typeof variable}`
			);
		}

		Object.entries(variable).forEach(([key, value]) => {
			const currentPath = `${path}.${key}`;

			if (typeof key !== "string") {
				throw new Error(
					`Invalid key at ${currentPath}: Expected a string key, got ${typeof key}`
				);
			}

			if (
				value !== null &&
				typeof value !== "string" &&
				(!Array.isArray(value) ||
					!value.every((item, index) => {
						if (!isPrimitive(item)) {
							throw new Error(
								`Invalid array value at ${currentPath}[${index}]: Expected a primitive, got ${typeof item}`
							);
						}
						return true;
					}))
			) {
				throw new Error(
					`Invalid value at ${currentPath}: ${JSON.stringify(value)}`
				);
			}
		});
	}
}
