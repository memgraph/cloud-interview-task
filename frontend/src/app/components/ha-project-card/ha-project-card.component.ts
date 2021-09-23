import { Component, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-ha-project-card',
  templateUrl: './ha-project-card.component.html',
  styleUrls: ['./ha-project-card.component.scss'],
})
export class HaProjectCardComponent {
  @Input() project;

  constructor(private projectService: ProjectService) {}

  deleteProject() {
    this.projectService.deleteProject(this.project.id);
  }
}
