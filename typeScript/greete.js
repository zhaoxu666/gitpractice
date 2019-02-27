function greeter(person) {
    return "Hello," + person;
}
var user = "Victor";
document.body.innerHTML = greeter(user);
function fun(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var people = { firstName: "Jane", lastName: "James" };
document.body.innerHTML = fun(people);
//类
//创建学生类
var student = /** @class */ (function () {
    function student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return student;
}());
//创建方法
function fun1(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var Jane = new student("Jane", "M.", "James");
console.log(Jane);
document.body.innerHTML = fun1(Jane);
