import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BlinkerComponent } from './components/blinker/blinker.component';
import { HaProjectCardComponent } from './components/ha-project-card/ha-project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectCardComponent,
    HaProjectCardComponent,
    UsersComponent,
    UserCardComponent,
    SideNavComponent,
    BlinkerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
