import { Component, Input } from '@angular/core';
import { Events } from 'src/app/MockTask';
import { allEvents } from '../../allTask';
import { FilterCategoryService } from 'src/app/services/filter-category.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
  constructor(private event: FilterCategoryService) {}

  events: Events[] = allEvents;

  getUrl(event: Events): string {
    return event.cover_picture;
  }

  
}
