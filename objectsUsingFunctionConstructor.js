var atul = {
  name: "Atul",
  job: "developer",
  dateOfBirth: 1995,
}; // 1) creating normal object

var Person = function (name, job, dateOfBirth) {
  this.name = name;
  this.job = job;
  this.dateOfBirth = dateOfBirth;
  this.calcAge = function () {
    var age = 2021 - this.dateOfBirth; // or dateOfBirth w/o this keyword
    return age;
    //or
    // console.log(age);
  };
}; //2) creating object using function constructor

var vikas = new Person("Vikas", "Policeman", 1995);

// vikas.calcAge();
//or
console.log(vikas.calcAge());
// console.log(typeof vikas, typeof atul);
// atul.name = "Atul boy";
// console.log(atul.name);
