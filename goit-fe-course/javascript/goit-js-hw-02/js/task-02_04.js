'use strict';
const formatString = function (string) {
	let array = string.split('');
	let modifiedArray;
	let modifiedString;
	if (array.length <= 40) {
		modifiedArray = array;
		modifiedString = modifiedArray.join('');
	} else {
		modifiedArray = array.slice(0, 39);
		modifiedString = `${modifiedArray.join('')}...`;
	}
	return modifiedString;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
	formatString(
		'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
	)
);
