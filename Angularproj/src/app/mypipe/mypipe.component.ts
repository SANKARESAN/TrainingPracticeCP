
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-mypipe',
  standalone:true,
  imports: [CommonModule,],
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {

  msg:string= "Welcome you all to Angular session." 
  emp = {
    id : 22,
    name : "Indhu",
    salary : 123000,
    address : "chennai"};
    dateObj = new Date();
}
