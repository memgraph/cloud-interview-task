import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects$ = new BehaviorSubject<any>([]);
  haProjects$ = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  deleteProject(id: string) {
    this.http.delete(`/api/v1/projects/${id}`).subscribe((res) => console.log('Deleted project:', res));
  }

  getProjects() {
    this.http.get('/api/v1/projects').subscribe((res: any) => {
      this.projects$.next(res.data);
    });
    this.http.get('/api/v1/ha-projects').subscribe((res: any) => {
      this.haProjects$.next(res.data);
    });
  }
}
