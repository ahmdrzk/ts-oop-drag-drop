import { State } from "./state.js";
import { Project, ProjectStatus } from "../models/project.js";

class ProjectsState extends State<Project> {
  private static instance: ProjectsState;
  private projects: Project[] = [];

  private constructor() {
    super();
  }

  static getInstance(): ProjectsState {
    if (!this.instance) this.instance = new ProjectsState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number): void {
    const newProject = new Project(
      `${Math.ceil(Math.random() * 10)}${Date.now()}`,
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    this.callListeners();
  }

  moveProject(projectId: string, targetListType: ProjectStatus): void {
    const project = this.projects.find((project) => project.id === projectId);
    if (project && targetListType !== project.status) {
      project.status = targetListType;
    }

    this.callListeners();
  }

  private callListeners(): void {
    this.listeners.forEach((fn) => fn([...this.projects]));
  }
}

export const projectsState = ProjectsState.getInstance();
