import fs from 'node:fs';
import { parseInput } from './lib';
import { contains } from './a';

export async function A(path?: string): Promise<string> {
	const input = fs.createReadStream(path || `${__dirname}/input`);
	return (await parseInput(input)).filter(contains).length.toString();
}
