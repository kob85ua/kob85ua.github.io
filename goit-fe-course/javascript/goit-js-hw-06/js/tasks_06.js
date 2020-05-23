'use strict';

import usersData from './users.js';
// console.table(usersData)

console.log('______Task01______');
//  Method map
const getUserNames = (users) =>
	users.map((user) => {
		return user.name;
	});

console.table(getUserNames(usersData));

console.log('______Task02______');
//  Method filter
const getUsersWithEyeColor = (users, color) =>
	users.filter((user) => {
		return user.eyeColor === color;
	});

console.table(getUsersWithEyeColor(usersData, 'blue'));

console.log('______Task03______');
//  Method reduse condition
const getUsersWithGender = (users, gender) =>
	users.reduce((namesByGender, user) => {
		if (user.gender === gender) {
			namesByGender.push(user.name);
		}
		return namesByGender;
	}, []);

console.table(getUsersWithGender(usersData, 'male'));

console.log('______Task04______');
//  Method filter
const getInactiveUsers = (users) =>
	users.filter((user) => {
		return user.isActive !== true;
	});

console.table(getInactiveUsers(usersData));

console.log('______Task05______');
//  Method find

const getUserWithEmail = (users, email) =>
	users.find((user) => {
		if (user.email === email) {
			return user;
		}
	});

console.table(getUserWithEmail(usersData, 'shereeanthony@kog.com'));

console.table(getUserWithEmail(usersData, 'elmahead@omatom.com'));

console.log('______Task06______');
//  Method filter
const getUsersWithAge = (users, min, max) =>
	users.filter((user) => {
		if (user.age >= min && user.age <= max) {
			return user;
		}
	});

console.table(getUsersWithAge(usersData, 20, 30));

console.table(getUsersWithAge(usersData, 30, 40));

console.log('______Task07______');
//  Method reduse total

const calculateTotalBalance = (users) =>
	users.reduce((totalBalance, user) => {
		return (totalBalance += user.balance);
	}, 0);

console.log(calculateTotalBalance(usersData));

console.log('______Task08______');
// Method some as condition in method reduce

const getUsersWithFriend = (users, friendName) =>
	users.reduce((commonFriends, user) => {
		if (user.friends.some((friend) => friend === friendName) === true) {
			commonFriends.push(user.name);
		}

		return commonFriends;
	}, []);

console.table(getUsersWithFriend(usersData, 'Briana Decker'));
console.table(getUsersWithFriend(usersData, 'Goldie Gentry'));

console.log('______Task09______');
//  Method reduce as sort in map
const getNamesSortedByFriendsCount = (users) =>
	users.reduce((moreSociableUsers, user) => {
		user.friends.length - user.friends.length;
		moreSociableUsers.push(user.name);
		return moreSociableUsers;
	}, []);

console.table(getNamesSortedByFriendsCount(usersData));

console.log('______Task10______');

const getSortedUniqueSkills = (users) =>
	users.reduce((sortedAllSkills, user) => {
		sortedAllSkills.push(...user.skills);

		sortedAllSkills.sort();

		sortedAllSkills = Array.from(new Set(sortedAllSkills));

		return sortedAllSkills;
	}, []);

console.table(getSortedUniqueSkills(usersData));
