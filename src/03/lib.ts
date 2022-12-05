import readline from 'node:readline';

export interface Rucksack {
	first: string;
	second: string;
}

export function makeRucksack(s: string): Rucksack {
	return {
		first: s.slice(0, s.length / 2),
		second: s.slice(s.length / 2),
	};
}

export async function parseInput(input: NodeJS.ReadableStream): Promise<Rucksack[]> {
	const rl = readline.createInterface({ input });

	const results: Rucksack[] = [];

	for await (const line of rl) {
		if (line !== '') {
			results.push(makeRucksack(line));
		}
	}

	return results;
}

export function priority(c: string): number {
	const ord = c.charCodeAt(0);
	if (ord > 96) {
		// lowercase range
		return ord - 96;
	}
	return ord - 38;
}
