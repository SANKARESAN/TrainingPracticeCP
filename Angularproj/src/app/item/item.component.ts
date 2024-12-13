import { Component } from '@angular/core';
import { commonImgPath } from '../shared/Constant/constantData';
import { CommonModule } from '@angular/common';
import { ItemsserviceService } from '../shared/services/itemsservice.service';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj = new ItemsserviceService();

  myitems : any[] = [
    {name : "img1", price:10, description:"special-1", imgPath:commonImgPath.img1},
    {name : "img2", price:20, description:"special-2", imgPath:commonImgPath.img2},
    {name : "img3", price:15, description:"special-3", imgPath:commonImgPath.img3},
    {name : "img4", price:12, description:"special-4", imgPath:commonImgPath.img4},

  ]

}



