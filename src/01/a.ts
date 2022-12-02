import readline from 'node:readline';
import fs from 'node:fs';

export async function parseInput(input: NodeJS.ReadableStream): Promise<number[]> {
	const rl = readline.createInterface({ input });

	const results: number[] = [];
	let agg = 0;

	for await (const line of rl) {
		if (line !== '') {
			agg = agg + parseInt(line, 10);
		} else {
			results.push(agg);
			agg = 0;
		}
	}

	if (agg != 0) {
		results.push(agg);
	}

	return results;
}

export function greatestInList(elves: number[]): number {
	let g = 0;
	elves.forEach((v) => {
		if (v > g) {
			g = v;
		}
	});
	return g;
}

export async function solve(): Promise<number> {
	const input = fs.createReadStream(`${__dirname}/input`);
	return greatestInList(await parseInput(input));
}
