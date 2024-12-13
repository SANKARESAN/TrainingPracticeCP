import IEmployee from "./interface";

class Organization implements IEmployee{
    empId : number;
    empName : string;
    empContact : number;

    constructor(id:number, name:string, contact:number){
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    employeeDetails(): string {
        return `Id:${this.empId} Name:${this.empName} Contact:${this.empContact}`;
    }
}

let organizationObj = new Organization(1001,"Arumugam",99999);
console.log(organizationObj.employeeDetails());