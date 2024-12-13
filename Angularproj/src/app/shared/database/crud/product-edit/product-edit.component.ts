import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  id:any;
  prodData:any;
  constructor(private _actRoute:ActivatedRoute, private _dbObj:DbserviceService, private _router:Router){}

  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      // console.log(param);
      this.id = param.id;
      this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        // console.log(res);
        this.prodData={...res}
      })
    })
  }

  addData(val:any){
    this._dbObj.updateRecord("products",this.id,val).subscribe(()=>{
      window.alert("Products are updated successfully")
      this._router.navigate(["/maindashboard/productDash"])
    })
  }
}
