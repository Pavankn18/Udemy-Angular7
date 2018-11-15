import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = true;
  events = [];
  date: Date = new Date();

  onDisplayClick() {
    this.display = !this.display;
    this.events.push(this.date);
  }

}
