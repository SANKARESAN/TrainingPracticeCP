import React from 'react'
import './external.css'
import commonData from "../shared/constant/ConstantData";

const HeaderComp = () => {
    return (
    <div className='headerbox'>
        <div className='logo'>
            <img src={commonData.logo2} alt='logo'/>
            <h2><strong><i>SS JEWELLERS</i></strong></h2>     
        </div>
    </div>
    )
}

export default HeaderComp
