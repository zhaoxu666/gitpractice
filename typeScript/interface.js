//接口
//介绍
/*TypeScript的核心原则之一是对值所具有的结构进行类型检查。
它有时被称做“鸭式辨型法”或“结构性子类型化”。
在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。*/
//初探接口
//example
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); //Size 10 Object
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObject = { size: 10, label: "Size 10 Object" };
printLabel1(myObject); //
