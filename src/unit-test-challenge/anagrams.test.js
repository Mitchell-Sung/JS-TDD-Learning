import { expect } from 'chai';
import isAnagram from './anagrams';

describe('isAnagram - basic functionality', () => {
	it('returns true when two known anagrams are passed in', () => {
		const expected = true;
		const actual = isAnagram('listen', 'silent');
		expect(actual).to.equal(expected);
	});

	// 'elbows' 'below' NOT anagrams.
	it('return false when either of the strings has extra letters', () => {
		const expected = false;

		const actual_01 = isAnagram('elbows', 'below');
		expect(actual_01).to.equal(expected);

		const actual_02 = isAnagram('below', 'elbows');
		expect(actual_02).to.equal(expected);
	});

	// 'listens' 'silent' NOT anagrams
	it('return false when the strings have the same letters in different quantities', () => {
		const expected = false;
		const actual = isAnagram('listens', 'silent');
		expect(actual).to.equal(expected);
	});
});
