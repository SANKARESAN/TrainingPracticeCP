import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ItemComponent } from './item/item.component';
import { ProductAddComponent } from './shared/database/crud/product-add/product-add.component';
import { ProductEditComponent } from './shared/database/crud/product-edit/product-edit.component';
import { ProductDashComponent } from './shared/database/crud/product-dash/product-dash.component';
import { authGuard } from './shared/custgurad/auth.guard';

export const routes: Routes = [

    //2. default routing
    // {path:"", component:LoginComponent },

    // 3. redirecting routing 
    {path:"", redirectTo: "login", pathMatch: "full" },

    //1. naming routing
    {path:"login", component:LoginComponent },
    {path:"maindashboard", component:MaindashboardComponent, canActivate:[authGuard], children:[
        {path:"item", component:ItemComponent},

        {path:"productDash", component:ProductDashComponent},
        {path:"productAdd", component:ProductAddComponent},
        {path:"productEdit/:id", component:ProductEditComponent},

        // {path:"logout", component:Logout},

        
     {path:"databinding", component:DatabindingComponent },
     {path:"parent",component:ParentcomponentComponent},
     {path:"mypipe/:id", component:MypipeComponent},

    // 5. child routing 
        {path:"angform", component:AngformComponent, children:[
        {path:"utdf", component:UtdfComponent},
        {path:"rtf", component:RtfComponent}
    ]},
    ] },

    //4. parameterize routing
    
    // 6. wild card routing
    {path:"**", component:PagenotfoundComponent}
];
