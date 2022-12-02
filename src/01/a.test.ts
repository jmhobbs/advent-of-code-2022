import test from 'ava';
import { greatestInList } from './a';

test('greatestInList', (t) => {
	t.is(greatestInList([6000, 4000, 11000, 24000, 10000]), 24000);
});
