import test from 'ava';
import { Readable } from 'stream';
import { parseInput } from './lib';

test('parseInput', async (t) => {
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
