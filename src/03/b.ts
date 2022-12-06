import { Rucksack } from './lib';

export function groupRucksacks(r: Rucksack[]): Rucksack[][] {
	const groups: Rucksack[][] = [];

	for (let i = 0; i < r.length; i += 3) {
		groups.push(r.slice(i, i + 3));
	}

	return groups;
}

function rucksackLetters(sack: Rucksack): Set<string> {
	return new Set((sack.first + sack.second).split(''));
}

export function groupOverlap(sacks: Rucksack[]): string {
	let common = [...rucksackLetters(sacks[0])];

	sacks.slice(1).forEach((sack) => {
		const letters = rucksackLetters(sack);
		common = common.filter((l) => letters.has(l));
	});

	return common[0];
}
