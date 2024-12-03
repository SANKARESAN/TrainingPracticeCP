// import {Person} from "./oops";

import {Person} from "./oops";

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

let compObj = new Company(101,"sam","chennai","changepond",9085026805,"software Developer");
compObj.personDetails();