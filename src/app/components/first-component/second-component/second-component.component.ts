import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  @Input() nameInput: string[] = []

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
