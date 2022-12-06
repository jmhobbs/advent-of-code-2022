import test from 'ava';

import { groupOverlap, groupRucksacks } from './b';

test('groupRucksacks', (t) => {
	t.deepEqual(
		groupRucksacks([
			{ first: 'A', second: 'B' },
			{ first: 'C', second: 'D' },
			{ first: 'E', second: 'F' },
			{ first: 'G', second: 'H' },
			{ first: 'H', second: 'I' },
			{ first: 'J', second: 'K' },
			{ first: 'L', second: 'M' },
		]),
		[
			[
				{ first: 'A', second: 'B' },
				{ first: 'C', second: 'D' },
				{ first: 'E', second: 'F' },
			],
			[
				{ first: 'G', second: 'H' },
				{ first: 'H', second: 'I' },
				{ first: 'J', second: 'K' },
			],
			[{ first: 'L', second: 'M' }],
		]
	);
});

test('groupOverlap', (t) => {
	t.is(
		groupOverlap([
			{
				first: 'vJrwpWtwJgWr',
				second: 'hcsFMMfFFhFp',
			},
			{
				first: 'jqHRNqRjqzjGDLGL',
				second: 'rsFMfFZSrLrFZsSL',
			},
			{
				first: 'PmmdzqPrV',
				second: 'vPwwTWBwg',
			},
		]),
		'r'
	);

	t.is(
		groupOverlap([
			{
				first: 'wMqvLMZHhHMvwLH',
				second: 'jbvcjnnSBnvTQFn',
			},
			{
				first: 'ttgJtRGJ',
				second: 'QctTZtZT',
			},
			{
				first: 'CrZsJsPPZsGz',
				second: 'wwsLwLmpwMDw',
			},
		]),
		'Z'
	);
});
