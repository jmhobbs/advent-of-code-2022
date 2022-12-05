import { Match, Play } from './lib';

export function getPlay(m: Match): Play {
	switch (m.player) {
		case 'X':
			return Play.Rock;
		case 'Y':
			return Play.Paper;
		case 'Z':
			return Play.Scissor;
	}
	throw new Error(`invalid play: ${m.player}`);
}
