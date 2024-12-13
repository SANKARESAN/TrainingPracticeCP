import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoutingComp =({Component}) => {
    const nav = useNavigate();
    
    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/");
        }
    },[]);
    return (
        <div>
            {/* <h1>this is protected routing</h1> */}
            <Component></Component>
        </div>
    )
}

export default ProtectedRoutingComp