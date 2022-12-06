import fs from 'node:fs';
import { parseInput, priority } from './lib';
import { compartmentOverlap } from './a';
import { groupOverlap, groupRucksacks } from './b';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	const totalPriorities = (await parseInput(input))
		.map(compartmentOverlap)
		.map(priority)
		.reduce((pv, cv) => pv + cv);
	return totalPriorities.toString();
}

export async function B(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	const totalPriorities = groupRucksacks(await parseInput(input))
		.map(groupOverlap)
		.map(priority)
		.reduce((pv, cv) => pv + cv);
	return totalPriorities.toString();
}
