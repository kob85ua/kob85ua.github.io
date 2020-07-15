'use strict';

class CountdownTimer {
	constructor({
		targetDate,
		selector,
		days = 0,
		hours = 0,
		mins = 0,
		secs = 0,
		time,
	}) {
		this.days = days;
		this.hours = hours;
		this.mins = mins;
		this.secs = secs;
		this.selector = selector;
		this.targetDate = targetDate;
		this.time = time;
	}

	timeIntervalTransformation() {
		this.time = this.targetDate - Date.now();
		if (this.time > 0) {
			this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
			this.hours = Math.floor(
				(this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
			this.secs = Math.floor((this.time % (1000 * 60)) / 1000);

			// console.log(`${this.days}:${this.hours}:${this.mins}:${this.secs}`)
		}
	}
	updateCountdownTimerFace() {
		document.querySelector(`${this.selector}`);
		document.querySelector('[data-value="days"]').textContent = String(
			this.days
		).padStart(2, '0');
		document.querySelector('[data-value="hours"]').textContent = String(
			this.hours
		).padStart(2, '0');
		document.querySelector('[data-value="mins"]').textContent = String(
			this.mins
		).padStart(2, '0');
		document.querySelector('[data-value="secs"]').textContent = String(
			this.secs
		).padStart(2, '0');
		
	}
	reNew() {
		setInterval(() => {
			this.timeIntervalTransformation.call(this);
			this.updateCountdownTimerFace.call(this);
		}, 1000);
	}
}

const firstTimer = new CountdownTimer({
	selector: '#timer-1',
	targetDate: new Date('Jul 17, 2020'),
});

firstTimer.reNew();
