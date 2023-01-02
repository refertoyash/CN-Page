import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { min } from 'rxjs';
import { GettingDataService } from 'src/app/services/getting-data.service';
import { FilterCategoryService } from 'src/app/services/filter-category.service';

@Component({
  selector: 'app-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.css'],
})
export class TagBoxComponent {
  newdata: any;
  tempdata: any;
  alltags = [];
  curr_tags = [];

  tag_status: boolean[] = [];
  stat = 0; //0 means inactive; and 1 means active

  constructor(
    private user: GettingDataService,
    private selectedtags: FilterCategoryService,
    private event: FilterCategoryService
  ) {
    this.user.getData().subscribe((response) => {
      this.tempdata = response;
      this.alltags = this.tempdata.data.tags;

      console.log(this.alltags);
      for (let i = 0; i < Math.min(this.alltags.length, 10); i++) {
        this.curr_tags.push(this.alltags[i]);
        this.tag_status.push(false);
      }
    });
  }

  ShowMore() {
    this.curr_tags = this.alltags;
  }
  temp_status: boolean;

  ItemClicked(index: number) {
    this.temp_status = this.tag_status[index];
    if (this.temp_status == true) this.tag_status[index] = false;
    else this.tag_status[index] = true;
    this.selectedtags.tags = this.tag_status;

    this.event.event_detail.taglist = '';
    for (let i = 0; i < this.tag_status.length; i++) {
      if (this.tag_status[i] == true)
        this.event.event_detail.taglist =
          this.event.event_detail.taglist + this.alltags[i] + ',';
    }
    this.event.event_detail.taglist = this.event.event_detail.taglist.substring(
      0,
      this.event.event_detail.taglist.length - 1
    );
    console.log(this.event.event_detail);
  }

  ngOnInit() {}
}
