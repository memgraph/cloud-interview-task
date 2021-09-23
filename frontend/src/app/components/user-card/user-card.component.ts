import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user;

  constructor(private http: HttpClient) {}

  deleteUser() {
    this.http.delete(`/api/v1/users/${this.user.id}`).subscribe((res) => console.log('res', res));
  }
}
