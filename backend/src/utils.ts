import { uniqueNamesGenerator, names, adjectives, animals } from 'unique-names-generator';
import { State, Region } from './enums';
import { HAProject, Project, User } from './interfaces';

export function getRandomEnumValue(enumeration: any) {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}

export function generateId() {
  return (Math.random() + 1).toString(36).substring(3);
}

export function getProjectName() {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: ' ',
    style: 'capital',
  });
}

export function getNewProject(userId: string) {
  const project: Project = {
    id: generateId(),
    userId,
    name: getProjectName(),
    state: State.Starting,
    region: getRandomEnumValue(Region),
  }
  return project;
}

export function getNewHAProject(userId: string) {
  const project: HAProject = {
    id: generateId(),
    userId,
    name: getProjectName(),
    state: State.Starting,
    states: [State.Starting, State.Starting, State.Starting],
    regions: [getRandomEnumValue(Region), getRandomEnumValue(Region), getRandomEnumValue(Region)],
  }
  return project;
}

export function getUserName() {
  return uniqueNamesGenerator({
    dictionaries: [names],
    style: 'capital',
  });
}

export function getNewUser() {
  const name = getUserName();
  const surname = getUserName();
  const user: User = {
    id: generateId(),
    name,
    email: `${name}.${surname}@gmail.com`,
  }
  return user;
}
