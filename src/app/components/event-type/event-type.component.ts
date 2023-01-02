import { Component } from '@angular/core';
import { FilterCategoryService } from 'src/app/services/filter-category.service';


@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.css']
})


export class EventTypeComponent {

    constructor(private event:FilterCategoryService){}
    OnClick(category:string){
      this.event.event_detail.category = category;
      this.event.event_detail.subcategory = "Upcoming";
      console.log(this.event.event_detail);
    }


}
