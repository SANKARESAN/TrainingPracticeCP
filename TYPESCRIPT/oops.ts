// 1)

export class Person{
    // data member 
    pid : number = 101;
    pname : string = "Tom";
    paddress : string = "chennai";

    
    constructor(id:number, name:string, addr: string){
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }

    // member-function
    personDetails(){
        console.log(`Id:${this.pid}, Name:${this.pname}, Address:${this.paddress}`); 
    // 'this' keyword refers to the object that is currently executing the code.
    }

}

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

class Company extends Person {
    cName : string;
    empContact: number;
    empPost: string;


    constructor(id: number, name: string, addr: string, compName: string, econtact: number, epost: string){
        super(id, name, addr);
        this.cName = compName;
        this.empContact = econtact;
        this.empPost = epost;
    }


    personDetails() {
        console.log(`EmpId:${this.pid} EmpName:${this.pname} Post:${this.empPost} company:${this.cName} Address:${this.paddress} 
Contact:${this.empContact}`)
    }
}

export default Person;

let compObj = new Company(101,"sam","chennai","changepond",9085026805,"software Developer");
compObj.personDetails();