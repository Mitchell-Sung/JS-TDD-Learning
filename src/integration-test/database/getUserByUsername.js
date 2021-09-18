import { MongoClient } from 'mongodb';

const getUserByUsername = async (username) => {
	const client = await MongoClient.connect(
		'mongodb://localhost:27017/TEST_DB',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

	const database = client.db('TEST_DB');

	const result = await database.collection('users').findOne({ username });

	client.close();

	return result;
};

export default getUserByUsername;
