class ValidationError extends Error {
	public path: string;
	public value: any;

	constructor(message: string, path: string, value: any = null) {
		super(message);
		this.name = "ValidationError";
		this.path = path;
		this.value = value;
	}
}
