import supertest, { SuperTest, Test } from 'supertest';
import { describe, expect, test, beforeAll } from '@jest/globals';
import app from '../../src/app';

describe('App Integration Test', () => {
	let server: SuperTest<Test>;

	beforeAll(() => {
		server = supertest.agent(app);
	});

	test('should return 200 when call GET /', async () => {
		const response = await server.get('/').send();

		expect(response.status).toBe(200);
	});
});
