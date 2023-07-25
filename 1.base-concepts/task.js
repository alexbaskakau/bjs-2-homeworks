"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	} else {
		arr[0] = -b / (2 * a);
	}

	return arr;
}

"use strict"
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let monthPay = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let totalMortgage = (monthPay * countMonths).toFixed(2);
	return parseFloat(totalMortgage);

}