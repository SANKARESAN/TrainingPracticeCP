"use strict";
// 1)
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name, addr) {
        // data member 
        this.pid = 101;
        this.pname = "Tom";
        this.paddress = "chennai";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    // member-function
    Person.prototype.personDetails = function () {
        console.log("Id:".concat(this.pid, ", Name:").concat(this.pname, ", Address:").concat(this.paddress));
        // 'this' keyword refers to the object that is currently executing the code.
    };
    return Person;
}());
exports.Person = Person;
// create object of class...
/*
 let personObj1 = new Person();             // for this no need of constructor
 console.log(personObj1.pname);           // tom  (print any of data from class, what we call)
 personObj1.personDetails();              // id: 101, name: tom, address: chennai
*/
/*
     let personObj2 = new Person(102,"Sam","Pune");
     console.log(personObj2.pname);
     personObj2.personDetails();
*/
// 2)
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, addr, compName, econtact, epost) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.cName = compName;
        _this.empContact = econtact;
        _this.empPost = epost;
        return _this;
    }
    Company.prototype.personDetails = function () {
        console.log("EmpId:".concat(this.pid, " EmpName:").concat(this.pname, " Post:").concat(this.empPost, " company:").concat(this.cName, " Address:").concat(this.paddress, " \nContact:").concat(this.empContact));
    };
    return Company;
}(Person));
exports.default = Person;
var compObj = new Company(101, "sam", "chennai", "changepond", 9085026805, "software Developer");
compObj.personDetails();
