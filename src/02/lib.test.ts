import test from 'ava';
import { Readable } from 'stream';
import { Play, parseInput, score, totalScore } from './lib';

test('parseInput', async (t) => {
	const s = new Readable();
	s.push(`A Y
B X
C Z
`);
	s.push(null);

	t.deepEqual(await parseInput(s), [
		{
			opponent: Play.Rock,
			player: 'Y',
		},
		{
			opponent: Play.Paper,
			player: 'X',
		},
		{
			opponent: Play.Scissor,
			player: 'Z',
		},
	]);
});

test('score', (t) => {
	t.is(score(Play.Rock, Play.Paper), 8);
	t.is(score(Play.Paper, Play.Rock), 1);
	t.is(score(Play.Scissor, Play.Scissor), 6);
});

test('score - all options', (t) => {
	t.is(score(Play.Rock, Play.Rock), 4);
	t.is(score(Play.Rock, Play.Paper), 8);
	t.is(score(Play.Rock, Play.Scissor), 3);
	t.is(score(Play.Paper, Play.Rock), 1);
	t.is(score(Play.Paper, Play.Paper), 5);
	t.is(score(Play.Paper, Play.Scissor), 9);
	t.is(score(Play.Scissor, Play.Rock), 7);
	t.is(score(Play.Scissor, Play.Paper), 2);
	t.is(score(Play.Scissor, Play.Scissor), 6);
});

function alwaysPaper(): Play {
	return Play.Paper;
}

test('totalScore', (t) => {
	t.is(
		totalScore(
			[
				{
					opponent: Play.Scissor,
					player: 'X',
				},
				{
					opponent: Play.Rock,
					player: 'X',
				},
				{
					opponent: Play.Paper,
					player: 'X',
				},
			],
			alwaysPaper
		),
		15
	);
});
