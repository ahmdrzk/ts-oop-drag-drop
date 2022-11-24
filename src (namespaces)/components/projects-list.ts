namespace App {
  export class ProjectsList extends Component<HTMLDivElement, HTMLDivElement> implements DragTarget {
    type: ProjectStatus;
    items: Project[] = [];
    listElement: HTMLUListElement;

    constructor(type: ProjectStatus) {
      super("#app", "#projects-list-temp");
      this.type = type;
      this.listElement = this.templateContentElement.querySelector("ul")! as HTMLUListElement;

      this.configure();
      this.renderContent();
    }

    protected configure(): void {
      this.templateContentElement.id = `${this.type}-projects`;
      this.listElement.id = `${this.type}-projects-list`;

      projectsState.addListener((projects: Project[]): void => {
        this.items = projects.filter((project) => project.status === this.type);
        this.renderProjectsList();
      });

      this.templateContentElement.addEventListener("dragover", this.dragOverHandler);
      this.templateContentElement.addEventListener("dragleave", this.dragLeaveHandler);
      this.templateContentElement.addEventListener("drop", this.dropHandler);
    }

    protected renderContent(): void {
      this.templateContentElement.querySelector("h2")!.textContent = `${this.type.toUpperCase()} PROJECTS`;
    }

    private renderProjectsList(): void {
      this.listElement.innerHTML = "";
      this.items.forEach((project) => {
        new ProjectItem(`#${this.listElement.id}`, project);
      });
    }

    @AutoBind
    dragOverHandler(event: DragEvent): void {
      if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault(); // the dragover event's default behavior is to prevent the drop event from being fired
        this.listElement.classList.add("droppable");
      }
    }

    @AutoBind
    dragLeaveHandler(event: DragEvent): void {
      this.listElement.classList.remove("droppable");
    }

    @AutoBind
    dropHandler(event: DragEvent): void {
      event.stopPropagation(); // stops the browser from redirecting
      const projectId = event.dataTransfer!.getData("text/plain");
      projectsState.moveProject(projectId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }
  }
}
