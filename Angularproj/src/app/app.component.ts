import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildComponent } from './child/child.component'
import { MypipeComponent } from './mypipe/mypipe.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingComponent, DirectiveComponent,ParentcomponentComponent,ChildComponent, MypipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angularproj';
}
