import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

 isCond1 : boolean = true;
 isCond2 : boolean = true;
 isCond3 : boolean = true;

 courses:string[] = ["React","Angular","Python","Java","Dotnet"];
 myCourse: string = "Angular";

  
  myStyle = {
    color:this.isCond1?"red":"green",
    backgroundColor:this.isCond2?"pink":"yellow",
    fontSize:this.isCond3?"25px":"30px",
  }

  myClass = {
    txtPrimary : this.isCond1,
    txtDanger : this.isCond2,
    special : this.isCond3,
  }


}
