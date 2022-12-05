import { Match, Play } from './lib';

export function getPlay(m: Match): Play {
	switch (m.player) {
		case 'X': // lose
			return {
				[Play.Rock]: Play.Scissor,
				[Play.Paper]: Play.Rock,
				[Play.Scissor]: Play.Paper,
			}[m.opponent];
		case 'Y': // draw
			return m.opponent;
		case 'Z': // win
			return {
				[Play.Rock]: Play.Paper,
				[Play.Paper]: Play.Scissor,
				[Play.Scissor]: Play.Rock,
			}[m.opponent];
	}
	throw new Error(`invalid play: ${m.player}`);
}
