import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestListService {
    startService() {
      console.log('O service foi ligado!');
      console.log('O service foi ligado! 2');
      console.log('O service foi ligado! 3');
    }

    alertService() {
      alert('O service foi ligado!');
      alert('O service foi ligado! 2');
      alert('O service foi ligado! 3');
    }
}
