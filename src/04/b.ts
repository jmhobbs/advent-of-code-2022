import { Pair } from './lib';

export function overlaps(pair: Pair): boolean {
	return !(pair.a.end < pair.b.start || pair.b.end < pair.a.start);
}
