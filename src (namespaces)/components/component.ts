namespace App {
  export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    containerElement: T;
    templateElement: HTMLTemplateElement;
    templateContentElement: U;

    constructor(containerId: string, templateId: string) {
      this.containerElement = document.querySelector(containerId)! as T;
      this.templateElement = document.querySelector(templateId)! as HTMLTemplateElement;
      this.templateContentElement = document.importNode(this.templateElement.content, true).firstElementChild! as U;

      this.attachToDom();
    }

    /* To add listeners, assign ids ... */
    protected configure?(): void;

    protected renderContent?(): void;

    private attachToDom(): void {
      this.containerElement.append(this.templateContentElement);
    }
  }
}
