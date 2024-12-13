import React, {useEffect, useState} from "react";

const UseStateHooksComp = ()=> {
    const [age,setAge] = useState(18);
    const [sal,setSal] = useState(10000);
    
    // // case-1 : when no dependencies values.
    // useEffect(()=>{
    //     setAge(age+1);
    // });

    // // case-2 :  when we pass dependencies value as black array.
    // useEffect(()=>{
    //     setAge(age+1);
    // },[]);

    // case-3 :  when we have to execute useEffect hook as we want.
    useEffect(()=>{
        setAge(age+1);
    },[sal]);

    return (
        <div>
            <h2>This  is  Use Effect Hooks Component</h2>
            <p>Age is : {age}</p>
           <p>Salary is : {sal}</p>
           <button type="button" onClick={()=>setSal(sal+5000)} className="btn btn-outline-info">Increment</button>
        </div>
     )
}


export default UseStateHooksComp;