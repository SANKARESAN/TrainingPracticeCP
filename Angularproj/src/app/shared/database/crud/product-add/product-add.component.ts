import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule,RouterLink],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  constructor(public dbObj:DbserviceService, public router:Router){}

      addData(data:any){
        console.log(data);
        this.dbObj.addRecord("products",data).subscribe(()=>{
          window.alert("Product added successfully");
          this.router.navigate(["/maindashboard/productDash"])
        })
      }
}
