'use strict';
let custоmerState = prompt('В какую страну выполнить доставку?');
let stateForDelivery;
let deliveryPrice;
let alertMessage;

if (custоmerState === null) {
	alertMessage = 'Отменено пользователем!';
} else {
	let customerStateInUpperCase = custоmerState.toUpperCase();

	switch (customerStateInUpperCase) {
		case 'КИТАЙ':
			stateForDelivery = 'Китай';
			deliveryPrice = 100;
			break;
		case 'ЧИЛИ':
			stateForDelivery = 'Чили';
			deliveryPrice = 250;
			break;
		case 'АВСТРАЛИЯ':
			stateForDelivery = 'Австралия';
			deliveryPrice = 170;
			break;
		case 'ИНДИЯ':
			stateForDelivery = 'Индия';
			deliveryPrice = 80;
			break;
		case 'ЯМАЙКА':
			stateForDelivery = 'Ямайка';
			deliveryPrice = 120;
			break;

		default:
			custоmerState = null;
			break;
	}

	if (custоmerState === null) {
		alertMessage = 'В вашей стране доставка не доступна';
	} else {
		alertMessage = `Доставка в ${stateForDelivery} будет стоить ${deliveryPrice} кредитов`;
	}
}

alert(alertMessage);
