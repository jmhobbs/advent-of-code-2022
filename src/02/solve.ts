import fs from 'node:fs';
import { parseInput, totalScore } from './lib';
import { getPlay as getPlayA } from './a';
import { getPlay as getPlayB } from './b';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return `${totalScore(await parseInput(input), getPlayA)} Points`;
}

export async function B(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return `${totalScore(await parseInput(input), getPlayB)} Points`;
}
