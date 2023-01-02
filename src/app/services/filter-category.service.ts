import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { allEvents } from '../allTask';
import { Events } from '../MockTask';
import { apiformat } from '../MockTask';
import { HttpClient ,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilterCategoryService {
  constructor(private http : HttpClient) {}
  tags: boolean[] = [];

  event_detail = {
    category: 'ALL_EVENTS',
    subcategory: 'Upcoming',
    taglist: '',
    offset: 1,
  };

  apiUrl = 'https://api.codingninjas.com/api/v3/events';

  CallAPI(url:string){
    return this.http.get(url);
  }

  makeAPI() {
    var api =
      this.apiUrl +
      '?event_category=' +
      this.event_detail.category +
      '&event_sub_category=' +
      this.event_detail.subcategory +
      '&tag_list=' +
      this.event_detail.taglist;
    api += '&offset=' + this.event_detail.offset;
  }
}
