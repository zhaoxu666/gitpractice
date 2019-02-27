//变量声明
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a, _b;
//var 声明
function f() {
    var message = "Hello,World";
    return message;
}
//并且我们也可以在其它函数内部访问相同的变量
function f1() {
    var a = 10;
    return function () {
        var b = a + 1;
        return b;
    };
}
var ff = f1();
console.log(ff());
/*上面的例子里，g可以获取到f函数里定义的a变量。
每当 g被调用时，它都可以访问到f里的a变量。
即使当 g在f已经执行完后才被调用，它仍然可以访问及修改a*/
function g() {
    var a = 1;
    a = 2;
    var b = h();
    a = 3;
    return b;
    function h() {
        return a;
    }
}
console.log(g()); // returns 2
//作用域规则
function func(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
func(true); //return 10;
console.log(func(true));
func(false); //return undefind;
console.log(func(false));
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i]; //i = 4;
        }
    }
    return sum;
}
var arr = [[1, 2, 3, 4], [5, 6, 7, 8]];
//sumMatrix(arr);
console.log(sumMatrix(arr)); //36 如果 第二个for循环内 也用i = 0 ;i < currentRow.length; i++ 则输出10;
//捕获变量怪异之处
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i); //输出10次10
}
//介绍一下，setTimeout会在若干毫秒的延时后执行一个函数（等待其它代码执行完毕，执行完毕 i= 10）
/*让我们花点时间思考一下这是为什么。 setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。 for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出 10！ */
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i); //立即执行函数来捕获每次迭代时i的值
}
//let
//块级作用域
// function blockFun(input: boolean) {
//     let a = 100;
//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }
//     // Error: 'b' doesn't exist here
//     return b;
// }
/*这里我们定义了2个变量a和b。 a的作用域是f函数体内，而b的作用域是if语句块里。*/
//在catch语句里声明的变量也具有同样的作用域规则。
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
//console.log(e);
/*拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。
 虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于 暂时性死区。
 它只是用来说明我们不能在 let语句之前访问它们，幸运的是TypeScript可以告诉我们这些信息。*/
// a++; // illegal to use 'a' before it's declared;
// let a;
function foo() {
    // okay to capture 'O'
    return O;
}
// 不能在'O'被声明前调用'foo'
// 运行时应该抛出错误
// foo();
// let O;
var O = 2;
console.log(foo());
//重定义及屏蔽
//我们提过使用var声明时，它不在乎你声明多少次；你只会得到1个
function m() {
    var mo;
    var mo;
    if (true) {
        var mo;
    }
}
//let
var oo = 10;
//let oo = 25;// 错误，不能在1个作用域里多次声明`oo`
//并不是要求两个均是块级作用域的声明TypeScript才会给出一个错误的警告
/*function ww(x){
    let x = 100;  //error: interferes with parameter declaration
}

function xx() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}*/
//并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明
function fooo(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
fooo(false, 0); // returns 0
fooo(true, 0); // returns 100
//let 重写 求数组和
function sumMatrixLet(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) { //用let 特性 屏蔽
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
//块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps()); //return Seattle
var _loop_1 = function (i_3) {
    setTimeout(function () { console.log(i_3); }, 100 * i_3);
};
/*当let声明出现在循环体里时拥有完全不同的行为。
不仅是在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域。
这就是我们在使用立即执行的函数表达式时做的事，所以在 setTimeout例子里我们仅使用let声明就可以了。*/
for (var i_3 = 0; i_3 < 10; i_3++) {
    _loop_1(i_3);
} //输出 0 1 2 3 4 5 6 7 8 9
//const 声明
var numLivesForCat = 9;
/*它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。
换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
这很好理解，它们引用的值是不可变的。*/
var numLivesForCat1 = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };
// all "okay"
kitty.name = "Rory"; //可以修改内部状态
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
/*除非你使用特殊的方法去避免，实际上const变量的内部状态是可修改的。
幸运的是，TypeScript允许你将对象的成员设置成只读的。 接口一章有详细说明*/
//解构
//解构数组
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); //1
console.log(second); //2
//这创建了2个命名变量 first 和 second。 相当于使用了索引，但更为方便：
first = input[0];
second = input[1];
//解构作用于已声明的变量会更好：
_a = [second, first], first = _a[0], second = _a[1];
console.log("first : " + first + ",second : " + second); //first:2,second:1
//作用于函数参数
var inputArr = [1, 2];
function fu(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
//你可以在数组里使用...语法创建剩余变量
var _c = [1, 2, 3, 4], fir = _c[0], last = _c.slice(1);
console.log("fir = " + fir); //1
console.log("last = " + last); //2,3,4
//当然，由于是JavaScript, 你可以忽略你不关心的尾随元素：
var firs = [1, 2, 3, 4][0];
console.log("firs = " + firs); // 1
//或其他元素
var _d = [1, 2, 3, 4], sec = _d[1], fourth = _d[3];
console.log("sec = " + sec); //2
console.log("fourth = " + fourth); //4
/*
let [, sec, fourth] = [1, 2, 3, 4];
console.log(`sec = ${sec}`) //2
console.log(`fourth = ${fourth}`) //3
*/
//对象解构
var obj = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = obj.a, b = obj.b;
console.log("a = " + a + ",b = " + b); //a = foo,b = 12
//这通过 o.a and o.b 创建了 a 和 b 。 注意，如果你不需要 c 你可以忽略它。
//就像数组解构，你可以用没有声明的赋值：
(_b = { a: "baz", b: 101 }, a = _b.a, b = _b.b);
console.log("a = " + a + ",b = " + b); //a = baz, b = 101
//你可以在对象里使用...语法创建剩余变量：
var c = obj.c, balabala = __rest(obj, ["c"]);
var total = balabala.a + balabala.b;
console.log("total = " + total); //foo12
//属性重命名
var newName1 = obj.a, newName2 = obj.b;
console.log("newName1 = " + newName1 + " , newName2 = " + newName2); //newName1 = foo,newName2 = 12
//你可以将 a: newName1 读做 "a 作为 newName1"
//let newName1 = o.a;
//let newName2 = o.b;
//默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
//函数声明
// typc C = {a:string,b?number};
// function f({ a, b }: C): void {
//     // ...
// }
//展开
//展开数组
var numberOne = [1, 2];
var secondOne = [3, 4];
var bothPlus = [0].concat(numberOne, secondOne, [5]);
console.log("bothPlus = " + bothPlus); //[0,1,2,3,4,5]
//展开对象
var defaults = {
    food: 'spicy',
    price: '$$',
    ambiance: 'noisy'
};
var search = __assign({}, defaults, { food: "rich" });
console.log("search = " + JSON.stringify(search));
