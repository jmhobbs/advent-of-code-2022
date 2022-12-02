import fs from 'node:fs';
import { parseInput } from './lib';
import { totalScore } from './a';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return `${totalScore(await parseInput(input))} Points`;
}
