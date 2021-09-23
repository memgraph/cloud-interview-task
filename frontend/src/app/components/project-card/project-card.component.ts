import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project;

  constructor(private http: HttpClient) {}

  deleteProject() {
    this.http.delete(`/api/v1/projects/${this.project.id}`).subscribe((res) => console.log('res', res));
  }
}
