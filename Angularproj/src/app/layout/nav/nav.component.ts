import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public _router:Router){}
  logout(){
    if(window.confirm("Are you sure to logout")){
      window.alert("Logout Successfully");
      sessionStorage.clear();
      this._router.navigate(["/"]);
    }
  }
}
