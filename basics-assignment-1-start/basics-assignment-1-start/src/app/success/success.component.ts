import { Component } from '@angular/core';


@Component({
  selector: 'app-success' ,
  template: '<h5>Process was a success</h5>',
  styles: [`
    h5 {
      color: green;
      text: bold;
    }
  `]
})
export class SuccessComponent {
}

