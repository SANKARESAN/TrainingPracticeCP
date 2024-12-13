import { createBrowserRouter } from "react-router-dom";

import HomeComp from "../Components/HomeComp";
import AboutComp from "../Components/AboutComp";
import ContactComp from "../Components/ContactComp";
import ProductComp from "../Components/ProductComp"

import NavComp from "../Layouts/NavComp";
import FooterComp from "../Layouts/FooterComp";
import MaindashboardComp from "../Layouts/MaindashboardComp";
import PagenotFoundComp from "../Layouts/PagenotFoundComp";
import HeaderComp from "../Layouts/HeaderComp";

const routing = createBrowserRouter([

    // {path:"",element:<FooterComp/>},
    {path:"/",element:<MaindashboardComp/>,children:[
        {path:"/pagenotfound",element:<PagenotFoundComp/>},
        {path:"/header",element:<HeaderComp/>},
    
        {path:"/home",element:<HomeComp/>},
        {path:"/about",element:<AboutComp/>},
        {path:"/contact",element:<ContactComp/>},
        {path:"/product",element:<ProductComp/>},
    ]},
    // {path:"nav",element:<NavComp/>},
   

    // {path:"mainDashboard",element:<ProtectedRoutingComp Component = {MainDashboardComp}/>, children:[
    
]);

export default routing;










