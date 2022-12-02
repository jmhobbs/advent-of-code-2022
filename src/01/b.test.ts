import test from 'ava';
import { topThreeTotal } from './b';

test('topThree', (t) => {
	t.is(topThreeTotal([6000, 4000, 11000, 24000, 10000]), 45000);
});
