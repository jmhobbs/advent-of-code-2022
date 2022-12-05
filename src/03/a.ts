import { Rucksack } from './lib';

export function compartmentOverlap(r: Rucksack): string {
	const f = [...new Set(r.first.split(''))];
	return [...new Set(r.second.split(''))].filter((c) => f.includes(c))[0];
}
