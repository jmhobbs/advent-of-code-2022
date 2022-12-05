import readline from 'node:readline';

export enum Play {
	Rock = 1,
	Paper,
	Scissor,
}

export interface Match {
	opponent: Play;
	player: string;
}

function toPlay(p: string): Play {
	switch (p) {
		case 'A':
			return Play.Rock;
		case 'B':
			return Play.Paper;
		case 'C':
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
				opponent: toPlay(line[0]),
				player: line[2],
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

type GetPlay = (m: Match) => Play;

export function totalScore(matches: Match[], getPlay: GetPlay): number {
	return matches.map((m: Match) => score(m.opponent, getPlay(m))).reduce((pv, cv) => pv + cv, 0);
}

export function score(opponent: Play, player: Play): number {
	let result: Result = Result.Loss;

	if (opponent === player) {
		result = Result.Draw;
	} else {
		if (
			(opponent === Play.Rock && player === Play.Paper) ||
			(opponent === Play.Paper && player === Play.Scissor) ||
			(opponent === Play.Scissor && player === Play.Rock)
		) {
			result = Result.Win;
		}
	}

	return player + result;
}
