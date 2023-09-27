import crypto from 'crypto';

export default class IDGenerator {
	static generate() {
		return crypto.randomUUID();
	}
}
