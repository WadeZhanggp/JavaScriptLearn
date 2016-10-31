/**
 * Created by zhangguangpeng on 16/10/31.
 */
function A() {
    this.sayHello() = function () {

    };
}

A.prototype.sayHello = function () {
    console.log("hello js");
}

var a = new A();
a.sayHello();