import fs from 'node:fs';
import { parseInput } from './lib';
import { greatestInList } from './a';
import { topThreeTotal } from './b';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return `${greatestInList(await parseInput(input))} Calories`;
}

export async function B(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return `${topThreeTotal(await parseInput(input))} Calories`;
}
