import React, {useState} from 'react'

const FormValComp =()=>{
    let mycourses = ["React","Java","Angular","Python","Html",'Javascript']
    const [user,setUser] = useState({
        fname:'',
        password:"",
        email:"",
        contact:"",
        course:"",
        term:false
    });

    const changeInput = (event) =>{
    //     console.log(event.target.type);
    //     console.log(event.target.type);
    //     console.log(event.target.type);
    const {type,name,value,checked} = event.target;
    setUser({...user,[name]:type==="checkbox" ? checked : value});
    }

    const checkData = (event) => {
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }

        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fullname must contain only character min-3 and min-20");
            return false;
        }
        
        if(user.password.trim()===""){
            window.alert("password is required");
            return false;
        }
        
        if(!user.password.trim().match("^[a-zA-Z0-9!@#$%^&*()_+]{8,12}$")){
            window.alert("password must contain one lowercase, one upercase letter,one special character with min:8 and max:12");
            return false;
        }

        if(user.email.trim()===""){
            window.alert("email is required");
            return false;
        }

        if(user.contact.trim()===""){
            window.alert("contact is required");
            return false;
        }
        
        if(!user.contact.trim().match("^[0-9]{9,11}$")){
            window.alert("contact must contain only numbers with min:9 and max:11");
            return false;
        }
        if(user.courses === ''){
            window.alert("course field is required");
            return false;
        }

        if(user.term ===false){
            window.alert("Please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }

    return (
        <div>
            <h2>This is Form Validation Component</h2>
            <form onSubmit={checkData}>
                <div>
                    <label>Enter your FullName:</label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
                </div>

                <div>
                    <label for="password">Enter Your Password:</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeInput}></input>
                </div>

                <div>
                    <label for="email">Enter Your Email:</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={changeInput}></input>
                </div>

                <div>
                    <label for="contact">Enter Your Phone Number:</label>
                    <input type="tel" name="contact" id="contact" value={user.contact} onChange={changeInput}></input>
                </div>

                <div>
                    <label>select your course:</label>
                    <select name='course' onChange={changeInput}>
                        <option value=''>select your course</option>
                        {
                            mycourses.map((val,index)=>{
                                return <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
                </div>

                <div>
                    <input type='checkbox' name='term' onChange={changeInput} value={user.term}/>Accept terms and conditions
                </div>
                <button type='submit' className='btn btn-outline-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp;
