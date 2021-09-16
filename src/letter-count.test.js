import { expect } from 'chai';
import { getLetterCount } from './letter-count.js';

// TESTING BASIC FUNCTIONS
describe('getLetterCount - basic functionality', () => {
	it('returns an empty object when passed an empty string', () => {
		const expected = {};
		const actual = getLetterCount('');
		expect(actual).to.deep.equal(expected);
	});
});

// keyword "deep" is comparing the object
// when remove "deep" keyword it just compares the same object in memory.
