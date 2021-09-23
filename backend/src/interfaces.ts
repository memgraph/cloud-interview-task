import { Region, State } from "./enums";

export interface Project {
  id: string;
  userId: string;
  name: string;
  state: State;
  region: Region;
}

export interface HAProject {
  id: string;
  userId: string;
  name: string;
  state: State;
  states: State[];
  regions: Region[];
}

export interface User {
  id: string;
  name: string;
  email: string;
}