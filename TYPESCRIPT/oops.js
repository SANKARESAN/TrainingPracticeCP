// 1)
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
    };
    return Person;
}());
// create object of class
// let personObj1 = new Person();
var personObj2 = new Person(102, "Sam", "Pune");
// console.log(personObj1.paddress);   // tom  (print any of data from class, what we call)
console.log(personObj2.pname); // tom  (print any of data from class, what we call)
// personObj1.personDetails();    
personObj2.personDetails(); // id: 101, name: tom, address: chennai
// 2)
