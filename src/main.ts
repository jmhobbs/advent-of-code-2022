import blessed from 'blessed';

const screen = blessed.screen({ smartCSR: true });

screen.title = 'Advent of Code 2022';

const list = blessed.list({
	top: 'center',
	left: 'center',
	width: '100%',
	height: '100%',
	tags: true,
	border: {
		type: 'line',
	},
	items: ['Problems Will Go Here'],
	vi: true,
});

screen.append(list);

screen.key(['escape', 'q', 'C-c'], () => {
	return process.exit(0);
});

list.focus();

screen.render();
