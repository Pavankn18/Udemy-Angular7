import { Component, OnInit } from '@angular/core';
import { UserStatusService } from './shared-services/user-status.service';
import { CounterService } from './shared-services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent implements OnInit {
  count = 0;

  constructor(private counter: CounterService) {}

  ngOnInit() {
    this.counter.counterChangeEvent.subscribe((count) => {
      this.count = count;
    });
  }

}
