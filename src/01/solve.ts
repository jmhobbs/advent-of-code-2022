import fs from 'node:fs';
import { parseInput } from './lib';
import { greatestInList } from './a';
import { topThreeTotal } from './b';

export async function A(path?: string): Promise<number> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return greatestInList(await parseInput(input));
}

export async function B(path?: string): Promise<number> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return topThreeTotal(await parseInput(input));
}
