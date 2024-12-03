
console.log("Welcome you all in Typescript");


// 1. string data-type

let fname : string;
fname = "sai";
let lname : string = "ram";
console.log(`First_name: ${fname} Last_name: ${lname}`);



// 2. Number

let num1 : number = 100, num2 : number = 0.5, num3: number = 123234;
console.log(num1,num2,num3);



// 3. boolean

let cond1 : boolean = true, cond2 : boolean = false;
console.log(cond1,cond2);



// 4. array

let courses : string[] = ["html","css","js","react"];
let courses1 : Array<string> = ["html","css","js","react"];


let pincode : number[] = [410014,410015,410016];
let pincode1 : Array<number> = [410014,410015,410016];


// 5. tuple : it allows us to store multiple type of data into array.

let product : [number, string, boolean] = [11, "Tom", true];
console.log(product);


// 6. enum : it create variable with constant values

enum days{sun=501, mon, tues, wed,thurs, fri, sat};
let data1 = days.sun;



// 7. Union : it allows us to store multiple values in single variable

let info : number | string | boolean = true;


// 8. any : when we dont what type of data is going to store in variable in that case we use it.

let mix : any = "hello";
console.log(mix);



























