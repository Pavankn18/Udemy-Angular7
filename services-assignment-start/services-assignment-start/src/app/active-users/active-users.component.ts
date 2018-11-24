import { Component, Input, OnInit } from '@angular/core';
import { UserStatusService } from '../shared-services/user-status.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
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
      if (user.active === true) { this.users.push(user); }
    });
  }

  onSetToInactive(name: string) {
    this.service.deactivateUser(name);
  }
}
