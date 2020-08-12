'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login;
let result;
// let allLogins;

const isLoginValid = function (login) {
	let resultIsLoginValid = login.length > 3 && login.length < 17;
	return resultIsLoginValid;
};

const isLoginUnique = function (allLogins, login) {
	let resultIsLoginUnique = allLogins.includes(login);

	return resultIsLoginUnique;
};

const addLogin = function (allLogins, login) {
	if (isLoginValid(login) === true) {
		if (isLoginUnique(login) === false) {
			logins.splice(allLogins.length, 0, login);

			result = 'Логин успешно добавлен!';
		} else {
			result = 'Такой логин уже используется!';
		}
	} else {
		result = 'Ошибка! Логин должен быть от 4 до 16 символов';
	}
	// allLogins = logins;

	return result;
};

console.log(addLogin(logins, 'Ajax'));

console.log(addLogin(logins, 'robotGoogles'));

console.log(addLogin(logins, 'Zod'));

console.log(addLogin(logins, 'jqueryisextremelyfast'));
