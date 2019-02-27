//接口

//介绍
/*TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
它有时被称做“鸭式辨型法”或“结构性子类型化”。 
在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。*/

//初探接口
//example
function printLabel(labelledObj:{label:string}) { //这个写法表示这个对象参数有一个名为label类型为string的属性
    console.log(labelledObj.label)
}

let myObj = {size:10,label:"Size 10 Object"};
printLabel(myObj);  //Size 10 Object

/*类型检查器会查看printLabel方法调用。
printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性，
需要注意的是，我们传入的对象参数实际上会包含很多属性，
但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。*/

//error
/*let otherObj = {name:"victor",age:27,isMarried:false};
printLabel(otherObj); 
Argument of type '{ name: string; age: number; isMarried: boolean; }' is not assignable to parameter of type '{ label: string; }'.*/

//用接口实现上门的例子
interface LabelledValue {
    label:string
}

function printLabel1(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

let myObject = {size:10,label:"Size 10 Object"};
printLabel1(myObject); //Size 10 Object