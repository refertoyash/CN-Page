import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventPageComponent } from './components/event-page/event-page.component';
import { EventPageHeaderComponent } from './components/event-page-header/event-page-header.component';
import { EventTypeComponent } from './components/event-type/event-type.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { TagBoxComponent } from './components/tag-box/tag-box.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    EventPageHeaderComponent,
    EventTypeComponent,
    EventListComponent,
    CardBoxComponent,
    TagBoxComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
