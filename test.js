// import { MongoClient } from 'mongodb';
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
// import { expect } from 'chai';
// import getUserByUsername from './getUserByUsername.js';

// describe('getUserByUsername', () => {
// 	it('get the correct user from the database given a username', async () => {
// 		const client = await MongoClient.connect(
// 			'mongodb://localhost:27017/TEST_DB',
// 			{
// 				useNewUrlParser: true,
// 				useUnifiedTopology: true,
// 			}
// 		);
// 		const database = client.db('TEST_DB');
// 		client.close();
// 	});
// });

const connectDB = async () => {
	const client = await MongoClient.connect(
		'mongodb://localhost:27017/TEST_DB',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

	console.log(`client`, client);
	const database = client.db('TEST_DB');
	console.log(`database`, database);
	client.close();
};

connectDB();
