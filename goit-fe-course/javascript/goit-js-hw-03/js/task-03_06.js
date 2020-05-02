'use strict';
const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
	for (const obj of allProdcuts) {
		const valuesOfProducts = Object.values(obj);

		if (valuesOfProducts[0] === productName) {
			const productPrice = valuesOfProducts[1];
			const productQuantity = valuesOfProducts[2];
			const totalPrice = productPrice * productQuantity;
			return totalPrice;
		}
	}
};


console.log(calculateTotalPrice(products, 'Радар')); 

console.log(calculateTotalPrice(products, 'Дроид')); 
