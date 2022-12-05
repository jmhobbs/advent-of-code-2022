import test from 'ava';

import { getPlay } from './b';
import { Play } from './lib';

test('getPlay', (t) => {
	t.is(
		getPlay({
			opponent: Play.Rock,
			player: 'X',
		}),
		Play.Scissor
	);
	t.is(
		getPlay({
			opponent: Play.Rock,
			player: 'Y',
		}),
		Play.Rock
	);
	t.is(
		getPlay({
			opponent: Play.Rock,
			player: 'Z',
		}),
		Play.Paper
	);
});
