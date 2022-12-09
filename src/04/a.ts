import { Pair } from './lib';

export function contains(pair: Pair): boolean {
	return (
		(pair.a.start <= pair.b.start && pair.b.end <= pair.a.end) ||
		(pair.b.start <= pair.a.start && pair.a.end <= pair.b.end)
	);
}
