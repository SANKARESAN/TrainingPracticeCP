import React from "react"
import {outlet} from 'react-router-dom'

const FooterComp = (props)=> {
    return (
        <div>
            {/* <h2>This  is Footer Component</h2> */}
            <p className="text-primary" style={{float:"right"}}>This App is design and Developed By <strong>Sankaresh</strong></p>
        </div>
    )
}

export default FooterComp;