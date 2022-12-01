import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  eventFunc() {
    alert('clickado')
  }

  enterFunc() {
    alert('Mouse entrou')
  }
}
