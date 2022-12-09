import test from 'ava';
import { overlaps } from './b';

test('overlap', (t) => {
	t.false(
		overlaps({
			a: { start: 2, end: 4 },
			b: { start: 6, end: 8 },
		})
	);
	t.false(
		overlaps({
			a: { start: 2, end: 3 },
			b: { start: 4, end: 5 },
		})
	);
	t.true(
		overlaps({
			a: { start: 5, end: 7 },
			b: { start: 7, end: 9 },
		})
	);
	t.true(
		overlaps({
			a: { start: 2, end: 8 },
			b: { start: 3, end: 7 },
		})
	);
	t.true(
		overlaps({
			a: { start: 6, end: 6 },
			b: { start: 4, end: 6 },
		})
	);
	t.true(
		overlaps({
			a: { start: 2, end: 6 },
			b: { start: 4, end: 8 },
		})
	);
});
