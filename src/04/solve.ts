import fs from 'node:fs';
import { parseInput } from './lib';
import { contains } from './a';
import { overlaps } from './b';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return (await parseInput(input)).filter(contains).length.toString();
}

export async function B(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return (await parseInput(input)).filter(overlaps).length.toString();
}
