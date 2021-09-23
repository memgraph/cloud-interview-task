import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users;
  userCont$;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  onRefresh() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('/api/v1/users').subscribe((res: any) => {
      this.users = res.data;
    });
  }
}
