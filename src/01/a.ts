export function greatestInList(elves: number[]): number {
	let g = 0;
	elves.forEach((v) => {
		if (v > g) {
			g = v;
		}
	});
	return g;
}
