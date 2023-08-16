function parseCount(numberOfItems) {
	const number = Number.parseFloat(numberOfItems);
	if (isNaN(number)) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(numberOfItems) {
	try {
		const number = parseCount(numberOfItems);
		return number;
	} catch (error) {
		return error;
	}
}
class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		this.a = a;
		this.b = b;
		this.c = c;
		let p = (a + b + c) / 2;
		return parseFloat(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}