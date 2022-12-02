import readline from 'node:readline';

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
