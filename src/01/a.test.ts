import test from 'ava';
import { Readable } from 'stream';
import { greatestInList, parseInput } from './a';

test('parseInput - problem description example', async (t) => {
	const s = new Readable();
	s.push(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`);
	s.push(null);

	t.deepEqual(await parseInput(s), [6000, 4000, 11000, 24000, 10000]);
});

test('greatestInList', (t) => {
	t.is(greatestInList([10, -100, 50, 32]), 50);
});
