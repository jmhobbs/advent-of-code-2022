import test from 'ava';
import { compartmentOverlap } from './a';
import { makeRucksack } from './lib';

test('compartmentOverlap', (t) => {
	t.is(
		compartmentOverlap({
			first: 'vJrwpWtwJgWr',
			second: 'hcsFMMfFFhFp',
		}),
		'p'
	);

	t.is(
		compartmentOverlap({
			first: 'jqHRNqRjqzjGDLGL',
			second: 'rsFMfFZSrLrFZsSL',
		}),
		'L'
	);

	t.is(
		compartmentOverlap({
			first: 'PmmdzqPrV',
			second: 'vPwwTWBwg',
		}),
		'P'
	);

	t.is(compartmentOverlap(makeRucksack('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn')), 'v');

	t.is(compartmentOverlap(makeRucksack('ttgJtRGJQctTZtZT')), 't');

	t.is(compartmentOverlap(makeRucksack('CrZsJsPPZsGzwwsLwLmpwMDw')), 's');
});
