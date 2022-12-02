import blessed from 'blessed';

import { solve as dayOnePartA } from './01/a';

interface Day {
	a: any;
	b?: any;
}

const screen = blessed.screen({ smartCSR: true });

screen.title = 'Advent of Code 2022';

const days: Day[] = [
	{
		a: {
			fn: dayOnePartA,
			str: '% Calories',
		},
	},
];

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
			if (day.b) {
				items.push(`Day ${index + 1} - Part B`);
			}
			return items;
		})
		.flat(),
	mouse: true,
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

	if (item.indexOf('-') === -1) {
		// whole day
		box.setContent('A: ' + days[day - 1].a.str.replace('%', await days[day - 1].a.fn()));
		screen.render();

		if (days[day - 1].b) {
			box.setContent(
				box.content + '\nB: ' + days[day - 1].b.str.replace('%', await days[day - 1].b.fn())
			);
		} else {
			box.setContent(box.content + '\nB: Not Completed');
		}
		screen.render();
	} else {
		// single part
		const part = item.slice(item.indexOf('Part ') + 5);
		if (part === 'A') {
			box.setContent(days[day - 1].a.str.replace('%', await days[day - 1].a.fn()));
			screen.render();
		} else {
			box.setContent(days[day - 1].b.str.replace('%', await days[day - 1].b.fn()));
			screen.render();
		}
	}
});

screen.append(list);

screen.key(['escape'], () => {
	if (boxShown) {
		screen.remove(box);
		screen.render();
		boxShown = false;
	} else {
		return process.exit(0);
	}
});

screen.key(['q', 'C-c'], () => {
	return process.exit(0);
});

list.focus();

screen.render();
