function data(){
    //window.alert("Hi");
    //let uname = document.getElementById("fname").value;

    let uname = document.myform.fname.value;
    let upass=document.myform.pwd.value;
    let uemail=document.myform.email.value;
    let ucontact=document.myform.contact.value;
    let ugender = document.myform.gender;
    let uedu = document.myform.edu;
    let regName = "^[a-zA-Z ]{2,20}$";
    let regPass= "^[a-zA-Z0-9!@#$%^&*()_+]{8,12}$";
    let regEmail="^^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    let regContact="^[0-9]{9,11}$";

    if(uname.trim() === ""){
        window.alert("Fullname is required");
        document.getElementById("name").focus();
        return false;
    }

    if(!uname.trim().match(regName)){
        window.alert("Fullname must contain only characters minimum:2 and maximum:20");
        return false;
    }

    if(upass.trim() === ""){
        window.alert("Password is required");
        document.getElementById("pwd").focus();
        return false;
    }

    if(!upass.trim().match(regPass)){
        window.alert("Passsword should contain mininum 8 chracters and maximum 12 characters, atleast one uppercase letter, one lowercase letter,one number,one special symbol(!@#$%^&*()_+)");
        document.getElementById("pwd").focus();
        return false;
    }

    if(uemail.trim() === ""){
        window.alert("Email is required");
        document.getElementById("email").focus();
        return false;
    }

    if(!uemail.trim().match(regEmail)){
        window.alert("Enter a valid email");
        document.getElementById("email").focus();
        return false;
    }

    if(ucontact.trim() === ""){
        window.alert("Phonenumber is required");
        document.getElementById("fname").focus();
        return false;
    }

    if(!ucontact.trim().match(regContact)){
        window.alert("Phone number should contain only numbers and minimum 9 numbers and maximum 11 numbers");
        document.getElementById("contact").focus();
        return false;
    }

    if (![...ugender].some(g => g.checked)) { window.alert("Please Select Your Gender"); return false; } 
    
    if (![...uedu].some(e => e.checked)) { window.alert("Please Select Your Qualification"); return false;
     } 
    return true;
}