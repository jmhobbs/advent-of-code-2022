import test from 'ava';

import { getPlay } from './a';
import { Play } from './lib';

test('getPlay', (t) => {
	t.is(
		getPlay({
			opponent: Play.Rock,
			player: 'X',
		}),
		Play.Rock
	);
	t.is(
		getPlay({
			opponent: Play.Rock,
			player: 'Y',
		}),
		Play.Paper
	);
	t.is(
		getPlay({
			opponent: Play.Rock,
			player: 'Z',
		}),
		Play.Scissor
	);
});
