import fs from 'node:fs';
import { parseInput, priority } from './lib';
import { compartmentOverlap } from './a';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	const totalPriorities = (await parseInput(input))
		.map(compartmentOverlap)
		.map(priority)
		.reduce((pv, cv) => pv + cv);
	return totalPriorities.toString();
}
