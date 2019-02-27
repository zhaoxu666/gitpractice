//基础类型
//1、boolean
var isDone = false;
/**end**/
//2、number (TypeScript里的所有数字都是浮点数)
var decL = 6;
var hexL = 0xf00d; //61453 16进制
console.log(hexL);
/**end**/
//3、string
var firstName = "Bob";
firstName = "Smith";
var lastName = "James";
var age = 27;
//模板字符串
var sentence = "Hello,My Name is " + lastName + ". I will be " + (age + 1) + " years old next month";
console.log(sentence);
/**end**/
//4、Array
//定义数组
var list = [1, 2, 3];
var list1 = [4, 5, 6]; //数组泛型
/**end**/
//5、元组Tuple
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var x;
x = ["hello", 10]; // ok
//x = [10,"hello"]; //error
console.log(x[0].slice(1)); //ok
//console.log(x[1].slice(1)); //error Property 'slice' does not exist on type 'number'
//x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
//console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
//x[6] = true; // Error, 布尔不是(string | number)类型
/**end**/
//6、枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); //输出2 默认情况从0开始编号
//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
var Car;
(function (Car) {
    Car[Car["BMW"] = 1] = "BMW";
    Car[Car["Benz"] = 2] = "Benz";
    Car[Car["ZT"] = 3] = "ZT";
})(Car || (Car = {}));
;
var car = Car.Benz;
console.log(car); //输出2 BMW 1 BenZ 2
//全部都采用手动赋值：
var Cars;
(function (Cars) {
    Cars[Cars["BMW"] = 1] = "BMW";
    Cars[Cars["Benz"] = 3] = "Benz";
    Cars[Cars["ZT"] = 5] = "ZT";
})(Cars || (Cars = {}));
;
var cars = Cars.ZT;
console.log(cars); //输出5
var Benz = Cars[3];
console.log(Benz); //输出Benz
/**end**/
//7、Any
var notSure = 4;
notSure = "maybe is a string";
console.log(notSure); //输出 maybe is a string
notSure = false;
console.log(notSure); //输出 false
/*any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 -
但是却不能够在它上面调用任意的方法，即便它真的有这些方法： */
//example
var notSureData = 4;
var numberFun = notSureData.toFixed();
console.log(numberFun); // 4
var prettySure = 4;
//prettySure.toFixed() //property 'toFixed' does not exist on type 'Object'
/*你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：*/
var listAny = [1, true, "free"];
listAny[1] = 100; //listAny[1] 为 true;
console.log(listAny); //[1, 100, "free"]
/**end**/
//8、Void
/*void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void*/
function warnUser() {
    console.log("This is my warning message");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
/**end**/
//9、Never
/*never类型表示的是那些永不存在的值的类型。
 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message); //throw 语句用来抛出一个用户自定义的异常
    console.log(111); //不会执行
}
var str = "很抱歉，出错了";
try {
    error(str);
}
catch (e) {
    console.log(e);
    console.log(222);
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
//create({prop : 0});
//create(null); 
//create(42); // error Argument of type '42' is not assignable to parameter of type 'object'.
/**end**/
//11、类型断言
//类型断言有两种形式。 其一是“尖括号”语法：
var someValue = "this is a string";
var strLength = someValue.length; //类型断言
console.log(strLength);
//另一种为as语法
var otherValue = "this is a string";
var otherStrLength = otherValue.length; //类型断言
console.log(otherStrLength);
