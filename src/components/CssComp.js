import React from "react";
import './external.css';
import mymodule from './mycss.module.css';


const CssComp = () => {
    let circle = {
        width:true? '100px':'200px',
        height:true? '100px':'200px',
        border:false?"2px solid red":"5px solid green",
        margin: "auto"
    }
    return (
        <div>
            {/* 1.use of internal css */}
            <h1 style={{color:"red", backgroundColor:"yellow"}}>This is css Component</h1>
            <p style={circle}>hi</p>

            {/* 2.use of external css */}
            <div className="txtPrimary">Hello Arvin</div>
            <div className="txtDanger">Hello Arjun</div>

            {/* 3.use of module css */}
            <div className={mymodule.special}>Hello</div>
        </div>
    )
}


export default CssComp;