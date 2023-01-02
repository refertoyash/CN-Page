import { Component } from '@angular/core';
import { FilterCategoryService } from 'src/app/services/filter-category.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
   
  constructor(private event: FilterCategoryService){}

  onClick(subcategory: string){
    this.event.event_detail.subcategory = subcategory;
    this.event.makeAPI();
    console.log(this.event.event_detail);
  }
}
