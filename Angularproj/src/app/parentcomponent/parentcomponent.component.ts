import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parentcomponent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parentcomponent.component.html',
  styleUrl: './parentcomponent.component.css'
})
export class ParentcomponentComponent {

  parentData:any;
  childData:any;


    senData(val:string){
      // console.log(val);

      this.parentData=val;
    }

}
