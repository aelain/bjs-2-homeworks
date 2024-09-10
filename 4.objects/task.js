function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!('marks' in this) || !this.marks.length) {
    return 0;
  }
  return this.marks.reduce((currentSum, currentValue) => currentSum + currentValue, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
