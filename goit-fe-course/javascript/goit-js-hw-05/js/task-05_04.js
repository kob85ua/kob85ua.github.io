'use strict';
class StringBuilder {
	constructor(value) {
		this._value = value;
	}
	append(value) {
		this._value += value;
	}
	prepend(value) {
		this._value = value + this._value;
	}
	pad(value) {
		this._value = value + this._value + value;
	}
	get value() {
		return this._value;
	}
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);
