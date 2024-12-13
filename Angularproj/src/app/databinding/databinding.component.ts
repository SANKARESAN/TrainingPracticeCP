import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string = "Sankaresh";
  imgPath:string="./images/bb1.jpg";
  imgName:string="ipl logo";

  inputData:string = 'briyani';


// 3. event binding 
// <!-- method-1 -->

greeting(){
    window.alert("Good Night")
  }

//  method-2

greeting1(val:string){
    window.alert(`Good Night ${val}`)
  }










}
