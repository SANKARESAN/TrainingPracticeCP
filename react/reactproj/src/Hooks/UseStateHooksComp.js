import React, {useState} from "react";

const UseStateHooksComp = ()=> {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("sankaresh");

    const incrementCount =()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h2>This  is  Use State Hooks Component</h2>
            <p>counter value:<strong>{count}</strong></p>

            <button type='button' onClick={()=>incrementCount()} className="btn btn-warning">
                change count +1
            </button>   {" "}

            <button type='button' onClick={()=>setCount(count+2)} className="btn btn-success">
                change count +2
            </button>  {" "}
            <hr/>
            <p>My Name : {name}</p>
            <button type='button' onClick={()=>setName('Rajkumar')} className="btn btn-danger">
                change Name
            </button>  {" "}
        </div>
    )
}

export default UseStateHooksComp; 