import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavComp = (props) => {
const nav = useNavigate()




    return (
        <div>
            {/* <h2>This Nav Component</h2> */}
            <Link to = "/home" className="btn btn-outline-primary btn-sm" style={{margin:"10px"}}>Home</Link>
            <Link to = "/about" className="btn btn-outline-success btn-sm" style={{margin:"10px"}}>About</Link>
            <Link to = "/product" className="btn btn-outline-warning btn-sm" style={{margin:"10px"}}>Products</Link>
            <Link to = "/contact" className="btn btn-outline-danger btn-sm" style={{margin:"10px"}}>Contact</Link>
        </div>
    )
}

export default NavComp
