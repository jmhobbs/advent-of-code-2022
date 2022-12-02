import { Match, score } from './lib';

export function totalScore(matches: Match[]): number {
	return matches.map((m: Match) => score(m)).reduce((pv, cv) => pv + cv, 0);
}
