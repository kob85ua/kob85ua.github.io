'use strict';
class Storage {
	constructor(items = []) {
		this.items = items;
	}
	getItems() {
		return this.items;
	}

	addItem(itemName) {
		this.items.push(itemName);
	}

	removeItem(itemName) {
		this.items = items.filter((item) => item !== itemName);
	}
}

const storage = new Storage([
	'Нанитоиды',
	'Пролонгер',
	'Железные жупи',
	'Антигравитатор',
]);
console.dir(storage);
const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
