import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import FooterComp from "./FooterComp";
import HeaderComp from './HeaderComp';

const MaindashboardComp = () => {
    return (
            <div className="container mt-3">
            {/* <h2>This  is Main dasboard Component</h2> */}
        
        <HeaderComp/>
            <div className="card border-primary">
                <div className="card-header border-primary">
                <NavComp/>
                </div>

                <div className="card-body border-primary">
                    <Outlet/>
                </div>

                <div className="card-footer border-primary">
                <FooterComp/>
                </div>
            </div>
        </div>
    )
}

export default MaindashboardComp
