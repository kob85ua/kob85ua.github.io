'use strict';

let input;
let total = 0;
let alertMessage;

do {
	input = prompt('Введите число');
	let i = Number(input);
	if (isNaN(i)) {
		alert('Было введено не число, попробуйте еще раз');
		input = prompt('Введите число');
		i = Number(input);
	} else {
	}
	let sum = total;
	total = sum + i;
	console.log(Number(total));
} while (input != null);
alertMessage = `Общая сумма чисел равна ${total}`;
alert(alertMessage);
