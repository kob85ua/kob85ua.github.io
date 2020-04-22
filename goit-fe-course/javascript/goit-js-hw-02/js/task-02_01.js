'use strict';

const logItems = function (array) {
	for (let index = 0; index < array.length; index += 1) {
		let element = index + 1;
		console.log(`${element} - ${array[index]}`);
	}
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
