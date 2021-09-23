import express = require('express');
import { State } from './enums';

import { Project, HAProject, User } from './interfaces';
import { getNewHAProject, getNewProject, getNewUser, getRandomEnumValue } from './utils';

const UPDATE_INTERVAL = 10000;
const NEW_PROJECT_PROBABILITY = 1;
const HA_PROBABILITY = 0.3;
const DELETE_PROJECT_PROBABILITY = 0.3;
const DELETE_HA_PROBABILITY = 0.5;
const NEW_USER_PROBABILITY = 0.1;

const app: express.Application = express();
const port = 3000; // default port to listen

const users: User[] = [getNewUser(), getNewUser(), getNewUser()]
const projects: Project[] = [getNewProject(users[0].id), getNewProject(users[1].id)];
const haProjects: HAProject[] = [getNewHAProject(users[2].id)];

setInterval(() => {
  if (Math.random()< NEW_USER_PROBABILITY) {
    const newUser = getNewUser();
    users.push(newUser);
    console.log('Added new user:', newUser);
  }

  if (Math.random()< NEW_PROJECT_PROBABILITY) {
    const randomUserId = users[Math.floor(Math.random()* users.length)].id;

    if (Math.random()< HA_PROBABILITY) {
      const newProject = getNewHAProject(randomUserId)
      haProjects.push(newProject);
      console.log('Added new HA project:', newProject);
    } else {
      const newProject = getNewProject(randomUserId);
      projects.push(newProject);
      console.log('Added new project:', newProject);
    }
  }

  if (Math.random()< DELETE_PROJECT_PROBABILITY) {
    if (Math.random()< DELETE_HA_PROBABILITY) {
      const index = Math.floor(Math.random()* haProjects.length);
      const deletedProject = haProjects[index];
      projects.splice(index, 1);
      console.log('Deleted HA project:', deletedProject);
    } else {
      const index = Math.floor(Math.random()* projects.length);
      const deletedProject = projects[index];
      projects.splice(index, 1);
      console.log('Deleted project:', deletedProject);
    }
  }

  projects.forEach(project => project.state = getRandomEnumValue(State));
  haProjects.forEach(project => {
    const randomStates = [getRandomEnumValue(State), getRandomEnumValue(State), getRandomEnumValue(State)]
    project.states = randomStates;
    project.state = randomStates.indexOf(State.Running) > -1 ? State.Running : State.Paused;
  });
}, UPDATE_INTERVAL)

app.get('/api/v1/users', ( req, res ) => {
  console.log('[GET] /api/v1/users')
  res.send({data: users});
});

app.delete('/api/v1/users/:id', (req, res) => {
  const user = users.filter((user) => user.id === req.params.id)[0];
  console.log('Deleting user', user)
  users.splice(users.findIndex((user) => user.id === req.params.id), 1);
  projects.splice(0, projects.length, ...projects.filter((project) => project.userId !== user.id));
  console.log(users)
  res.send({user});
})

app.get( '/api/v1/projects', ( req, res ) => {
  console.log('[GET] /api/v1/projects')
  res.send({data: projects});
});

app.delete('/api/v1/projects/:id', (req, res) => {
  const project = projects.filter((project) => project.id === req.params.id)[0];
  console.log('Deleting project', project)
  projects.splice(projects.findIndex((project) => project.id === req.params.id), 1);
  console.log(projects)
  res.send({project});
})

app.get( '/api/v1/ha-projects', ( req, res ) => {
  console.log('[GET] /api/v1/ha-projects')
  res.send({data: haProjects});
});

app.delete('/api/v1/ha-projects/:id', (req, res) => {
  const project = haProjects.filter((project) => project.id === req.params.id)[0];
  console.log('Deleting HA project', project)
  haProjects.splice(haProjects.findIndex((project) => project.id === req.params.id), 1);
  console.log(haProjects)
  res.send({project});
})

app.get( '/api/v1/users', ( req, res ) => {
  res.send();
});

// start the express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});


