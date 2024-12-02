// 1)

class Person{
    // data member 
    pid : number = 101;
    pname : string = "Tom";
    paddress : string = "chennai";

    /*
    constructor(id:number, name:string, addr: string){
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
*/
    // member-function
    personDetails(){
        console.log(`Id:${this.pid}, Name:${this.pname}, Address:${this.paddress}`);
    }

}

// create object of class...
/**/
 let personObj1 = new Person();             // for this no need of constructor
 console.log(personObj1.pname);           // tom  (print any of data from class, what we call)
 personObj1.personDetails();              // id: 101, name: tom, address: chennai
    
/*
     let personObj2 = new Person(102,"Sam","Pune");
     console.log(personObj2.pname); 
     personObj2.personDetails(); 

*/
