import blessed from 'blessed';

import * as DayOne from './01/solve';
import * as DayTwo from './02/solve';
import * as DayThree from './03/solve';
import * as DayFour from './04/solve';

type Solver = (path?: string) => Promise<string>;

interface Day {
	A: Solver;
	B?: Solver;
}

const screen = blessed.screen({ smartCSR: true });

screen.title = 'Advent of Code 2022';

const days: Day[] = [DayOne, DayTwo, DayThree, DayFour];

const list = blessed.list({
	top: 'center',
	left: 'center',
	width: '100%',
	height: '100%',
	tags: true,
	border: {
		type: 'line',
	},
	style: {
		selected: {
			bg: 'white',
			fg: 'black',
		},
	},
	items: days
		.map((day, index) => {
			const items = [`Day ${index + 1}`, `Day ${index + 1} - Part A`];
			if (day.B) {
				items.push(`Day ${index + 1} - Part B`);
			}
			return items;
		})
		.flat(),
	keys: true,
});

let boxShown = false;

const box = blessed.box({
	top: 'center',
	left: 'center',
	width: '25%',
	height: '25%',
	tags: true,
	shrink: true,
	border: {
		type: 'line',
	},
	shadow: true,
	content: 'Loading...',
});

list.on('action', async (selected) => {
	const item: string = selected.content;

	const day = parseInt(item.slice(4));

	box.setLabel(item);
	box.setContent('Loading...');
	box.focus();
	screen.append(box);
	screen.render();
	boxShown = true;

	const { A, B } = days[day - 1];

	try {
		if (item.indexOf('-') === -1) {
			// whole day
			box.setContent('A: ' + (await A()));
			screen.render();
			if (B) {
				box.setContent(box.content + '\nB: ' + (await B()));
			} else {
				box.setContent(box.content + '\nB: Not Completed');
			}
			screen.render();
		} else {
			// single part
			const part = item.slice(item.indexOf('Part ') + 5);
			if (part === 'A') {
				box.setContent('A: ' + (await A()));
				screen.render();
			} else {
				if (B) {
					box.setContent('B: ' + (await B()));
				}
				screen.render();
			}
		}
	} catch (err) {
		const errBox = blessed.box({
			top: 'center',
			left: 'center',
			width: '25%',
			height: '25%',
			tags: true,
			shrink: true,
			border: {
				type: 'line',
			},
			style: {
				bg: 'red',
				fg: 'white',
				border: {
					fg: 'yellow',
					bg: 'red',
				},
			},
			shadow: true,
			content: err.toString(),
		});
		screen.append(errBox);
		screen.render();
	}
});

screen.append(list);

screen.key(['escape'], () => {
	if (boxShown) {
		screen.remove(box);
		screen.render();
		boxShown = false;
	}
});

screen.key(['q', 'C-c'], () => {
	return process.exit(0);
});

list.focus();

screen.render();
