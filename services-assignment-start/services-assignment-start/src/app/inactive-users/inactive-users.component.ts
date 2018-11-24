import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserStatusService } from '../shared-services/user-status.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users:  {name: string, active: boolean}[] = [];

  constructor(private service: UserStatusService ) {}

  ngOnInit(): void {
    this.fileterUsers( this.service.getUsers() );
    this.service.statusChanged.subscribe(() => {
      this.fileterUsers(this.service.getUsers());
    });
  }

 private fileterUsers(users: {name: string, active: boolean }[]) {
    this.users = [];
    users.forEach(user => {
      if (user.active === false) { this.users.push(user); }
    });
  }

  onSetToActive(name: string) {
    this.service.activateUser(name);
  }
}
