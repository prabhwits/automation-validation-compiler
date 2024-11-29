export function isSnakeCase(str: string): boolean {
	// Check if the string matches the pattern: lowercase letters and underscores only, no leading or trailing underscores
	const snakeCasePattern = /^[a-z0-9]+(_[a-z0-9]+)*$/;
	return snakeCasePattern.test(str);
}
