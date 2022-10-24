//Generic Constraints
//You may sometimes want to write a generic that works only on a set of types where you have some knowledge about the capabilities
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    return MyObject;
}());
var Container = /** @class */ (function () {
    function Container() {
        this._array = [];
    }
    Container.prototype.add = function (item) {
        this._array.push(item);
        console.log(item.name);
    };
    Container.prototype.print = function () {
        this._array.forEach(function (value) { return console.log(value.name); });
    };
    return Container;
}());
//let c = new Container<string>();//Error
//let c1 = new Container<number>();//Error
var MyObject2 = /** @class */ (function (_super) {
    __extends(MyObject2, _super);
    function MyObject2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyObject2.prototype.doSomething = function () {
        console.log(this.name + " did it");
    };
    return MyObject2;
}(MyObject));
var obj = new MyObject2();
obj.name = "Zeeshan";
var cont = new Container();
cont.add(obj);
cont.print();
