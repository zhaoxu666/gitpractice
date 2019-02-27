function greeter(person :string){
    return "Hello," + person;
}

let user = "Victor";
document.body.innerHTML = greeter(user);

//接口
interface Person{
    firstName:string;
    lastName:string;
}

function fun(person:Person){
    return "Hello," + person.firstName + " " + person.lastName;
}

let people = {firstName:"Jane",lastName:"James"};

document.body.innerHTML = fun(people);

//类
//创建学生类
class student{
    fullName:string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string){ //在构造函数的参数上使用public等同于创建了同名的成员变量
        this.fullName = firstName +" "+ middleInitial +" "+ lastName;
    }
}

//创建人接口
interface PersonInterface{
    firstName:string;
    lastName:string
}

//创建方法
function fun1(person:PersonInterface){
    return "Hello," + person.firstName + " " + person.lastName;
}

let Jane = new student("Jane","M.","James");
console.log(Jane); //student{firstName:"Jane",middleInitial:"M.",lastName:"James",fullName:"Jane M. James"}
document.body.innerHTML = fun1(Jane);