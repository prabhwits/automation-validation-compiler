import winston from "winston";
import "winston-daily-rotate-file";

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Define custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
	return `${timestamp} [${level}]: ${stack || message}`;
});

// Configure Winston logger
const logger = winston.createLogger({
	level: process.env.NODE_ENV === "production" ? "info" : "debug",
	format: combine(
		timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		errors({ stack: true }), // Captures stack trace in error messages
		logFormat
	),
	transports: [
		// Console logging for development
		new winston.transports.Console({
			format: combine(colorize(), logFormat),
		}),
	],
});

export default logger;
