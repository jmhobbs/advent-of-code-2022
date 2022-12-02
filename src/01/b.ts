export function topThreeTotal(elves: number[]): number {
	return elves
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((pv, cv) => pv + cv);
}
