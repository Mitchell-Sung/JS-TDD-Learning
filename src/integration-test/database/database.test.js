// Get a connection this database
import { MongoClient } from 'mongodb';
import { expect } from 'chai';
import getUserByUsername from './getUserByUsername.js';

describe('getUserByUsername', () => {
	it('get the correct user from the database given a username', async () => {
		const client = await MongoClient.connect(
			'mongodb://localhost:27017/TEST_DB',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		const database = client.db('TEST_DB');

		const fakeData = [
			{
				id: '123',
				username: 'abc',
				email: 'abc@gmail.com',
			},
			{
				id: '124',
				username: 'wrong',
				email: 'wrong@wrong.com',
			},
		];

		await database.collection('users').insertMany(fakeData);

		const actual = await getUserByUsername('abc');
		const finalDBState = await database.collection('users').find().toArray();
		await database.dropDatabase();
		client.close();

		const expected = {
			id: '123',
			username: 'abc',
			email: 'abc@gmail.com',
		};

		expect(actual).to.deep.equal(expected);
		expect(finalDBState).to.deep.equal(fakeData);
	});
});
