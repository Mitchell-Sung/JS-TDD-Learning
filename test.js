import { isEqual } from 'lodash';
import getLetterCount from './src/unit-tests/letter-count.js';

const isAnagram = (string1, string2) => {
	const string1LetterCount = getLetterCount(string1);
	const string2LetterCount = getLetterCount(string2);

	console.log(`string1LetterCount`, string1LetterCount);
	console.log(`string2LetterCount`, string2LetterCount);

	const result = isEqual(string1LetterCount, string2LetterCount);

	console.log(`result`, result);

	return result;
};

isAnagram('listens', 'silent');
