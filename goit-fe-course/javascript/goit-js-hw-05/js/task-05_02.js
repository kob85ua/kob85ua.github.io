'use strict';
const User = function ({ name = 'userName', age = 0, followers = 0 }) {
	this.name = name;
	this.age = age;
	this.followers = followers;
};

User.prototype.getInfo = function () {
	console.log(
		`User ${this.name} is ${this.age} years old and has ${this.followers} followers`
	);
};

const mango = new User({
	name: 'Mango',
	age: 2,
	followers: 20,
});

mango.getInfo();

const poly = new User({
	name: 'Poly',
	age: 3,
	followers: 17,
});

poly.getInfo();
