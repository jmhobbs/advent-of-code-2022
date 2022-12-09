import test from 'ava';
import { contains } from './a';

test('contains', (t) => {
	t.false(
		contains({
			a: { start: 2, end: 4 },
			b: { start: 6, end: 8 },
		})
	);
	t.false(
		contains({
			a: { start: 2, end: 3 },
			b: { start: 4, end: 5 },
		})
	);
	t.false(
		contains({
			a: { start: 5, end: 7 },
			b: { start: 7, end: 9 },
		})
	);
	t.true(
		contains({
			a: { start: 2, end: 8 },
			b: { start: 3, end: 7 },
		})
	);
	t.true(
		contains({
			a: { start: 6, end: 6 },
			b: { start: 4, end: 6 },
		})
	);
	t.false(
		contains({
			a: { start: 2, end: 6 },
			b: { start: 4, end: 8 },
		})
	);
});
