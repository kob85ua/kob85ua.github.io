'use strict';
class Car {
	static getSpecs(car) {
		console.log(car);
	}

	constructor({
		speed = 0,
		price = 0,
		maxSpeed = 0,
		isOn = false,
		distance = 0,
	}) {
		this.speed = speed;
		this.price = price;
		this.maxSpeed = maxSpeed;
		this.isOn = isOn;
		this.distance = distance;
	}
	set priceSet(value) {
		this.price = value;
	}
	get priceSet() {
		return this.price;
	}

	turnOn() {
		this.isOn = true;
	}

	turnOff() {
		this.isOn = false;
		this.speed = 0;
	}

	accelerate(value) {
		this.speed += value;
	}

	decelerate(value) {
		if (this.speed >= 0) {
			this.speed -= value;
		}
		return this.speed;
	}

	drive(hours) {
		this.distance = this.distance + hours * this.speed;
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);


console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
