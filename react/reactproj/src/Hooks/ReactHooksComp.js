import React from "react";
import {Link, Outlet} from 'react-router-dom'


const ReactHooksComp = (props)=> {
    return (
        <div>
            <h2>This  is  React Hooks Component</h2>
            <div className="card border-primary">
                <div className="card-header border-primary">
                <Link to = "usestate" className="btn btn-warning btn-sm" style={{margin:"10px"}}>usestate</Link>
                <Link to = "useeffect" className="btn btn-info btn-sm">useEffect</Link>
                </div>
                <div className="card-body border-primary">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ReactHooksComp;