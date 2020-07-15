'use strict';
const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');

const stopBtn = document.querySelector('button[data-action="stop"]');

const colorSwitcher = {
	isActive: false,
	start() {
		if (this.isActive) {
			return;
		}
		this.isActive = true;
		this.bodyColour = setInterval(() => {
			document.body.style.background =
				colors[randomIntegerFromInterval(0, colors.length - 1)];
		}, 1000);
	},
	stop() {
		clearInterval(this.bodyColour);
		this.isActive = false;
	},
};

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
