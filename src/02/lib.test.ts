import test from 'ava';
import { Readable } from 'stream';
import { Play, parseInput, score } from './lib';

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
			player: Play.Paper,
		},
		{
			opponent: Play.Paper,
			player: Play.Rock,
		},
		{
			opponent: Play.Scissor,
			player: Play.Scissor,
		},
	]);
});

test('parseInput - all options', async (t) => {
	const s = new Readable();
	// sort < input | uniq
	s.push(`A X
A Y
A Z
B X
B Y
B Z
C X
C Y
C Z
`);
	s.push(null);

	t.deepEqual(await parseInput(s), [
		{
			opponent: Play.Rock,
			player: Play.Rock,
		},
		{
			opponent: Play.Rock,
			player: Play.Paper,
		},
		{
			opponent: Play.Rock,
			player: Play.Scissor,
		},
		{
			opponent: Play.Paper,
			player: Play.Rock,
		},
		{
			opponent: Play.Paper,
			player: Play.Paper,
		},
		{
			opponent: Play.Paper,
			player: Play.Scissor,
		},
		{
			opponent: Play.Scissor,
			player: Play.Rock,
		},
		{
			opponent: Play.Scissor,
			player: Play.Paper,
		},
		{
			opponent: Play.Scissor,
			player: Play.Scissor,
		},
	]);
});

test('score', (t) => {
	t.is(
		score({
			opponent: Play.Rock,
			player: Play.Paper,
		}),
		8
	);
	t.is(
		score({
			opponent: Play.Paper,
			player: Play.Rock,
		}),
		1
	);
	t.is(
		score({
			opponent: Play.Scissor,
			player: Play.Scissor,
		}),
		6
	);
});

test('score - all options', (t) => {
	t.is(
		score({
			opponent: Play.Rock,
			player: Play.Rock,
		}),
		4
	);
	t.is(
		score({
			opponent: Play.Rock,
			player: Play.Paper,
		}),
		8
	);
	t.is(
		score({
			opponent: Play.Rock,
			player: Play.Scissor,
		}),
		3
	);
	t.is(
		score({
			opponent: Play.Paper,
			player: Play.Rock,
		}),
		1
	);
	t.is(
		score({
			opponent: Play.Paper,
			player: Play.Paper,
		}),
		5
	);
	t.is(
		score({
			opponent: Play.Paper,
			player: Play.Scissor,
		}),
		9
	);
	t.is(
		score({
			opponent: Play.Scissor,
			player: Play.Rock,
		}),
		7
	);
	t.is(
		score({
			opponent: Play.Scissor,
			player: Play.Paper,
		}),
		2
	);
	t.is(
		score({
			opponent: Play.Scissor,
			player: Play.Scissor,
		}),
		6
	);
});
