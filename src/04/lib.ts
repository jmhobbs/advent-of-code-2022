import readline from 'node:readline';

export interface Section {
	start: number;
	end: number;
}

export interface Pair {
	a: Section;
	b: Section;
}

function sectionFromString(s: string): Section {
	const [start, end] = s.split('-');
	return {
		start: parseInt(start, 10),
		end: parseInt(end, 10),
	};
}

export async function parseInput(input: NodeJS.ReadableStream): Promise<Pair[]> {
	const rl = readline.createInterface({ input });

	const results: Pair[] = [];

	for await (const line of rl) {
		if (line !== '') {
			const [a, b] = line.split(',');

			results.push({
				a: sectionFromString(a),
				b: sectionFromString(b),
			});
		}
	}

	return results;
}
