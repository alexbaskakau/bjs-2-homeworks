function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.setSubject = function(subjectName) {
		this.subject = subjectName;
	}
	this.addMarks = function(...marksToAdd) {
		if (!this.marks) {
			return;
		}
		this.marks.push(...marksToAdd);
	}
	this.getAverage = function() {
		if (!this.marks || !this.marks.length) {
			return 0;
		}
		const sum = this.marks.reduce((acc, mark) => acc + mark);
		return sum / this.marks.length;
	}
	this.exclude = function(reason) {
		delete this.subject;
		delete this.marks;
		this.exluded = reason;
	}
}
