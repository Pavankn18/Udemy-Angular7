import { Injectable, EventEmitter, Output } from '@angular/core';
import { UserStatusService } from './user-status.service';

@Injectable()
export class CounterService {
  count = 0;
  @Output() counterChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private statusService: UserStatusService) {
    this.statusService.statusChanged.subscribe(() => {
      this.count = this.count + 1;
      this.counterChangeEvent.emit(this.count);
    });
  }

}
