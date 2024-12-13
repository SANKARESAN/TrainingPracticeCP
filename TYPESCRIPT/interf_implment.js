"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization = /** @class */ (function () {
    function Organization(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    Organization.prototype.employeeDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.empName, " Contact:").concat(this.empContact);
    };
    return Organization;
}());
var organizationObj = new Organization(1001, "Arumugam", 99999);
console.log(organizationObj.employeeDetails());
