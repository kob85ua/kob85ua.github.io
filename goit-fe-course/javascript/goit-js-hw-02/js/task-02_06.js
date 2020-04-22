'use strict';
let input;
const numbers = [];
let total = 0;
const sumOfNumbers = function (total) {
	do {
		input = prompt('Введите число');
		let i = Number(input);

		if (isNaN(i)) {
			alert('Было введено не число, попробуйте еще раз');
			input = prompt('Введите число');
			i = Number(input);
		}
		numbers.push(i);
		// console.log(numbers);
	} while (input != null);
	for (let a = 0; a < numbers.length; a += 1) {
		total += numbers[a];
	}

	return total;
};

console.log('Общая сумма чисел равна:', sumOfNumbers(total));
