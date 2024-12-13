import { createBrowserRouter } from "react-router-dom";
import VirtualDOM from "../components/VirtualDOM";          //
import MyImagesComp from '../components/MyImagesComp';
import UserComp from "../components/UserComp";          //
import MyStateComp from "../components/MyStateComp";    //       

import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";

import CssComp from '../components/CssComp';
import EventComp from '../components/EventComp';

import DataListComp from '../reduxCode/api/DataListComp';       //
import PageNotFoundComp from '../layout/PageNotFoundComp'
import MainDashboardComp from "../layout/MainDashboardComp";
import LoginComp from "../layout/LoginComp";
import FooterComp from "../layout/FooterComp";
import NavComp from "../layout/NavComp";
import EmpDetailsComp from "../Task/EmpDetailsComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRoutingComp from "../Main_Routing/ProtectedRoutingComp";

import MycarouselComp from "../components/MycarouselComp"



const routing = createBrowserRouter([

    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    
    {path:"empdetail",element:<EmpDetailsComp></EmpDetailsComp>},

    {path:"mainDashboard",element:<ProtectedRoutingComp Component = {MainDashboardComp}/>, children:[
        //default routing

        {path:"favcolor", element:<MyFavColorComp newColor="Green"></MyFavColorComp>},
        {path:"formval", element:<FormValComp></FormValComp>},
        {path:"productadd", element:<ProductAddComp></ProductAddComp>},
        {path:"productdash", element:<ProductDashComp></ProductDashComp>},
        {path:"editproduct/:id", element:<ProductEditComp></ProductEditComp>},

        {path:"MycarouselComp", element:<MycarouselComp></MycarouselComp>},

        {path:"datalist", element:<DataListComp></DataListComp>},

        {path:"",element:<MyStateComp></MyStateComp>},
        {path:"mystate",element:<MyStateComp></MyStateComp>},

        //naming routing

        {path:"virtualdom",element:<VirtualDOM></VirtualDOM>},

        //parameterized routing

        {path:"images/id",element:<MyImagesComp></MyImagesComp>},
        {path:"event",element:<EventComp />},
        {path:"mycss",element:<CssComp />},

        //child routing

        {path:"Hooks",element:<ReactHooksComp/>,children:[
            {path:"usestate",element:<UseStateHooksComp/>},
            {path:"useeffect",element:<UseEffectHooksComp/>},
        ]},
   
    ]},

    
    //wild-card routing

    {path:"*",element:<PageNotFoundComp/>}
]);

export default routing;







