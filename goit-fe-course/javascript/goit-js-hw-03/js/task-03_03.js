const findBestEmployee = function (employees) {
	const tasks = Object.values(employees);

	const maxTasks = Math.max(...tasks);
	const maxTasksIndex = tasks.indexOf(maxTasks);
	const names = Object.keys(employees);
	const bestEmloyee = names[maxTasksIndex];
	return bestEmloyee;
};

console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99,
	})
);

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4,
	})
);

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38,
	})
);
