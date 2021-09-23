import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  haProjects: any[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects();
    this.projectService.projects$.subscribe((projects) => {
      this.projects = projects;
    });
    this.projectService.haProjects$.subscribe((projects) => {
      this.haProjects = projects;
    });
  }

  onRefresh() {
    this.projectService.getProjects();
  }
}
