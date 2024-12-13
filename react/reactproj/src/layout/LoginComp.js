import axios from "axios";
import React, { useRef} from "react";
import './loginComp.css'
import { useNavigate } from "react-router-dom";
import commonData from "../shared/constant/constantData";
import {POST} from '../shared/service/HTTP.service'

const LoginComp=(props)=>{ 

  const nav=useNavigate();
  const uidRef=useRef();
  const upassRef=useRef();



    const checkUser = (event) =>{

        let uid=uidRef.current.value;
        let upass=upassRef.current.value;

        axios.get("http://localhost:8888/users").then((response)=>{
            //console.log(response.data);

            let currentUser=response.data.filter((val,index)=>{
                return val.userid===uid && val.userpass===upass
            })

            if(currentUser.length>0){
                window.alert("Login Success");
                sessionStorage.setItem("user",uid);
                nav("/mainDashboard");
            }

            else{
                window.alert("Wrong Credentials");
                uidRef.current.value="";
                upassRef.current.value="";
            }
            }).catch((error)=>{
            console.log(error);
        });

        event.preventDefault();
    }

    const logUser = () =>{
        window.alert("Logout Successfully")
        sessionStorage.clear();
        nav("/")
    }


    return (
        <div>
            <h2>This is Login Function Component</h2>

            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 loginContainer">
                    <form onSubmit={checkUser} className="loginform"> 
                        <label  className='form-label'>Enter ID:</label>
                        <input type='text' name='userid' ref={uidRef} className='form-control mb-2'></input>
                        <label  className='form-label'>Enter Password:</label>
                        <input type='text' name='userid' ref={upassRef} className='form-control mb-2'></input>
                       

                        <button type='submit' onClick={checkUser} className='btn btn-outline-primary mt-3'>Login</button>

                        {/* <button type='submit' onClick={logUser} className='btn btn-outline-primary mt-3 ms-3'>Logout</button> */}
                    </form>
                </div>
                <div className="col-sm-3"></div>
             </div>
        </div>
    )
};

export default LoginComp;