import { match } from 'node:assert';
import readline from 'node:readline';

export enum Play {
	Rock = 1,
	Paper,
	Scissor,
}

export interface Match {
	opponent: Play;
	player: Play;
}

function getPlay(p: string): Play {
	switch (p) {
		case 'A':
		case 'X':
			return Play.Rock;
		case 'B':
		case 'Y':
			return Play.Paper;
		case 'C':
		case 'Z':
			return Play.Scissor;
	}
	throw new Error(`invalid play: ${p}`);
}

export async function parseInput(input: NodeJS.ReadableStream): Promise<Match[]> {
	const rl = readline.createInterface({ input });

	const results: Match[] = [];

	for await (const line of rl) {
		if (line !== '') {
			results.push({
				opponent: getPlay(line[0]),
				player: getPlay(line[2]),
			});
		}
	}

	return results;
}

enum Result {
	Loss = 0,
	Draw = 3,
	Win = 6,
}

export function score(match: Match): number {
	let result: Result = Result.Loss;

	if (match.opponent === match.player) {
		result = Result.Draw;
	} else {
		if (
			(match.opponent === Play.Rock && match.player === Play.Paper) ||
			(match.opponent === Play.Paper && match.player === Play.Scissor) ||
			(match.opponent === Play.Scissor && match.player === Play.Rock)
		) {
			result = Result.Win;
		}
	}

	return match.player + result;
}
