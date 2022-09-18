"use strict";
exports.__esModule = true;
exports.C = exports.B = exports.A = exports.Employee = exports.mesaj = void 0;
exports.mesaj = "ilk module kavramim";
var mesaj2 = "let mesaj string";
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.spmName = name;
        this.empcode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code" + this.empcode + " , Employee Name:" + this.spmName);
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = "xyz";
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
exports.B = B;
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
exports.C = C;
