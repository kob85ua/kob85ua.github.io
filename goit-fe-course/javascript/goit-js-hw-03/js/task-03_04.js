'use strict';
const countTotalSalary = function (employees) {
	const salaryArray = Object.values(employees);
	let total = 0;
	for (let index = 0; index < salaryArray.length; index += 1) {
		const salaryOfEmployee = salaryArray[index];
		total += salaryOfEmployee;
	}
	return total;
};

console.log(countTotalSalary({}));

console.log(
	countTotalSalary({
		mango: 100,
		poly: 150,
		alfred: 80,
	})
);

console.log(
	countTotalSalary({
		kiwi: 200,
		lux: 50,
		chelsy: 150,
	})
);
