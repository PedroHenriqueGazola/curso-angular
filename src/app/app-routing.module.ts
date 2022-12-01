import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes   = [
  {path: '', component: FirstComponentComponent },
  {path: 'eventsComponents', component: EventsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
