import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  deleteUser(id: string) {
    return this.http.delete(`/api/v1/users/${id}`);
  }

  apiGetUsers() {
    return this.http.get('/api/v1/users').pipe((res: any) => res.data);
  }
}
