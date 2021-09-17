import { isEqual } from 'lodash';
import getLetterCount from './src/unit-tests/letter-count.js';

const isAnagram = (string1, string2) => {
	// const string1Letters = string1.split('');
	// const string2Letters = string2.split('');

	// const result = string1Letters.every(
	// 	(letter) =>
	// 		string2Letters.includes(letter) &&
	// 		string2Letters.every((letter) => string1Letters.includes(letter))
	// );

	const string1LetterCount = getLetterCount(string1);
	const string2LetterCount = getLetterCount(string2);

	console.log(`string1LetterCount`, string1LetterCount);
	console.log(`string2LetterCount`, string2LetterCount);

	const result = isEqual(string1LetterCount, string2LetterCount);

	console.log(`result`, result);

	return result;
};

isAnagram('listens', 'silent');
