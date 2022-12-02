import test from 'ava';

import { totalScore } from './a';
import { Play } from './lib';

test('totalScore', (t) => {
	t.is(
		totalScore([
			{
				opponent: Play.Rock,
				player: Play.Paper,
			},
			{
				opponent: Play.Paper,
				player: Play.Rock,
			},
			{
				opponent: Play.Scissor,
				player: Play.Scissor,
			},
		]),
		15
	);
});
