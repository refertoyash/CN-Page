import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GettingDataService {

  constructor(private http: HttpClient) { }
  
  getData(){
    let url ='https://api.codingninjas.com/api/v3/event_tags'
    return this.http.get(url);
  }
  



   
}
