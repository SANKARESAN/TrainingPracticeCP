console.log("Welcome you all in Typescript");
// 1. string data-type
var fname;
fname = "sai";
var lname = "ram";
console.log("First_name: ".concat(fname, " Last_name: ").concat(lname));
// 2. Number
var num1 = 100, num2 = 0.5, num3 = 123234;
console.log(num1, num2, num3);
// 3. boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
// 4. array
var courses = ["html", "css", "js", "react"];
var courses1 = ["html", "css", "js", "react"];
var pincode = [410014, 410015, 410016];
var pincode1 = [410014, 410015, 410016];
// 5. tuple : it allows us to store multiple type of data into array.
var product = [11, "Tom", true];
console.log(product);
// 6. enum : it create variable with constant values
var days;
(function (days) {
    days[days["sun"] = 501] = "sun";
    days[days["mon"] = 502] = "mon";
    days[days["tues"] = 503] = "tues";
    days[days["wed"] = 504] = "wed";
    days[days["thurs"] = 505] = "thurs";
    days[days["fri"] = 506] = "fri";
    days[days["sat"] = 507] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
// 7. Union : it allows us to store multiple values in single variable
var info = true;
// 8. any : when we dont what type of data is going to store in variable in that case we use it.
var mix = "hello";
console.log(mix);
