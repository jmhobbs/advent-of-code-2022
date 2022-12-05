import test from 'ava';
import { Readable } from 'stream';
import { parseInput, priority } from './lib';

test('parseInput', async (t) => {
	const s = new Readable();
	s.push(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`);
	s.push(null);

	t.deepEqual(await parseInput(s), [
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
	]);
});

test('priority', (t) => {
	t.is(priority('a'), 1);
	t.is(priority('z'), 26);
	t.is(priority('A'), 27);
	t.is(priority('Z'), 52);
});
