"use strict"

function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		return arr1.every((value, index) => {
			return value === arr2[index];
		});
	}
	return false;
}



function getUsersNamesInAgeRange(users, gender) {
	const filteredOnGender = users.filter(user => user.gender === gender);
	if (filteredOnGender.length === 0) {
		return 0;
	}
	let ages = filteredOnGender.reduce((acc, user) => acc + user.age, 0);
	let averageAge = ages / filteredOnGender.length;
	return averageAge;
}