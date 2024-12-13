import React from "react"
import {Link, useNavigate} from 'react-router-dom'

const NavComp = (props)=> {
const nav = useNavigate() 
    
    const logout = ()=>{
        if(window.confirm("Are you sure to logout") === true){
            window.alert("Logout Successfully")
            sessionStorage.clear();
            nav("/");
    }
}

    return (
        <div>
            {/* <h2>This  is NAV Component</h2> */}
            <Link to = "mystate" className="btn btn-outline-primary btn-sm" style={{margin:"5px"}}>mystate</Link>
            <Link to = "virtualDOM" className="btn btn-outline-info btn-sm" style={{margin:"5px"}}>virtualdom</Link>
            <Link to = "Hooks" className="btn btn-outline-warning btn-sm" style={{margin:"5px"}}>Hooks</Link>
            <Link to = "favcolor" className="btn btn-outline-success btn-sm" style={{margin:"5px"}}>MyFavColor</Link>
            <Link to = "formval" className="btn btn-outline-primary btn-sm" style={{margin:"5px"}}>Form Val</Link>
            <Link to = "productdash" className="btn btn-outline-danger btn-sm" style={{margin:"5px"}}>product dash</Link>
            <Link to = "MycarouselComp" className="btn btn-outline-warning btn-sm" style={{margin:"5px"}}>My Carousel</Link>
            <button type="button" className="btn btn-outline-info btn-sm" onClick={logout} style={{float:"right"}}>Logout</button>
            <Link to = "datalist" className="btn btn-outline-success btn-sm" style={{margin:"5px"}}>Data list</Link>
            {/* <Link to = "productedit" className="btn btn-outline-primary btn-sm" style={{margin:"5px"}}>product Edit</Link> */}
        </div>
    )
}
export default NavComp;