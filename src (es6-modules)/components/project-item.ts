import { Component } from "./component.js";
import { Project } from "../models/project.js";
import { Draggable } from "../models/drag-drop-interfaces.js";
import { AutoBind } from "../decorators/decorators.js";

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  project: Project;

  get persons() {
    const peopleCount = this.project.numOfPeople;
    return `${peopleCount} person${peopleCount > 1 ? "s" : ""}`;
  }

  constructor(containerId: string, project: Project) {
    super(containerId, "#project-item-temp");
    this.project = project;

    this.configure();
    this.renderContent();
  }

  protected configure(): void {
    this.templateContentElement.addEventListener("dragstart", this.dragStartHandler);
  }

  protected renderContent(): void {
    this.templateContentElement.querySelector("h2")!.textContent = this.project.title;
    this.templateContentElement.querySelector("h3")!.textContent = this.persons + " assigned";
    this.templateContentElement.querySelector("p")!.textContent = this.project.description;
  }

  @AutoBind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.effectAllowed = "move";
    event.dataTransfer!.setData("text/plain", this.project.id);
  }

  dragEndHandler(event: DragEvent): void {}
}
