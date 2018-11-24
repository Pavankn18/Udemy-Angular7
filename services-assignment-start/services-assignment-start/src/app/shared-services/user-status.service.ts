import { Output, EventEmitter, OnInit, Injectable } from '@angular/core';

@Injectable({providedIn: 'root' })
export class UserStatusService {
  @Output() statusChanged: EventEmitter<void> = new EventEmitter<void>();
  private users: {name: string, active: boolean}[] = [];

  constructor() {
    this.users.push({name: 'Max', active: true});
    this.users.push({name: 'Anna', active: true});
    this.users.push({name: 'Chris', active: false});
    this.users.push({name: 'Manu', active: false});
  }

  getUsers() {
    return Object.assign([], this.users);
  }

  activateUser(name) {
    this.users.forEach(user => {
      if (user.name === name) {
        user.active = true;
        this.statusChanged.emit();
        return;
      }
    });
  }

  deactivateUser(name) {
    this.users.forEach(user => {
      if (user.name === name) {
        user.active = false;
        this.statusChanged.emit();
        return;
      }
    });
  }
}
