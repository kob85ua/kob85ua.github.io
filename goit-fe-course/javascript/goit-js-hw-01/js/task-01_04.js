'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let alertMessage;
const custоmerOrder = prompt('Количество дройдов, которые Вы хотите купить?');

if (custоmerOrder === null) {
	alertMessage = 'Отменено пользователем!';
} else {
	const totalPrice = custоmerOrder * pricePerDroid;

	const creditsLeft = credits - totalPrice;
	if (totalPrice > credits) {
		alertMessage = 'Недостаточно средств на счету!';
	} else if (
		isNaN(custоmerOrder) ||
		custоmerOrder <= 0 ||
		custоmerOrder % 1 != 0
	) {
		alertMessage = 'Введите натуральное число';
	} else {
		alertMessage = `Вы купили ${custоmerOrder} дроидов, на счету осталось ${creditsLeft} кредитов.`;
	}
}

alert(alertMessage);
