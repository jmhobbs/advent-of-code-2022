import test from 'ava';
import { Readable } from 'stream';
import { parseInput } from './lib';

test('parseInput', async (t) => {
	const s = new Readable();
	s.push(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`);
	s.push(null);

	t.deepEqual(await parseInput(s), [
		{
			a: { start: 2, end: 4 },
			b: { start: 6, end: 8 },
		},
		{
			a: { start: 2, end: 3 },
			b: { start: 4, end: 5 },
		},
		{
			a: { start: 5, end: 7 },
			b: { start: 7, end: 9 },
		},
		{
			a: { start: 2, end: 8 },
			b: { start: 3, end: 7 },
		},
		{
			a: { start: 6, end: 6 },
			b: { start: 4, end: 6 },
		},
		{
			a: { start: 2, end: 6 },
			b: { start: 4, end: 8 },
		},
	]);
});
