import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/first-component/second-component/second-component.component';
import { EventsComponent } from './components/events/events.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeTwdbComponent } from './components/pipe-twdb/pipe-twdb.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    EventsComponent,
    ListRenderComponent,
    PipeTwdbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
