import { Component } from '@angular/core';
import { FilterCategoryService } from '../../services/filter-category.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent {
  constructor(private event: FilterCategoryService) {}

  ngOnInit() {}
}
