namespace App {
  export class Form extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("#app", "#form-temp");
      this.titleInputElement = this.templateContentElement.querySelector("#title") as HTMLInputElement;
      this.descriptionInputElement = this.templateContentElement.querySelector("#description") as HTMLInputElement;
      this.peopleInputElement = this.templateContentElement.querySelector("#people") as HTMLInputElement;

      this.configure();
    }

    protected configure(): void {
      // this.element.addEventListener("submit", this.submitUserInput.bind(this));
      this.templateContentElement.addEventListener("submit", this.submitUserInput);
    }

    private storeAndValidateUserInput(): [string, string, number] | void {
      const titleValue = this.titleInputElement.value;
      const descriptionValue = this.descriptionInputElement.value;
      const peopleValue = +this.peopleInputElement.value;

      if (
        validate({ value: titleValue, required: true, minLength: 5, maxLength: 20 }) &&
        validate({ value: descriptionValue, required: true, minLength: 5, maxLength: 50 }) &&
        validate({ value: peopleValue, required: true, min: 1, max: 5 })
      ) {
        return [titleValue, descriptionValue, peopleValue];
      } else {
        alert("Invalid inputs, please try again.");
      }
    }

    private clearUserInput(): void {
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }

    @AutoBind
    private submitUserInput(event: Event): void {
      event.preventDefault();
      const userInput = this.storeAndValidateUserInput();
      // if (Array.isArray(userInput)) {
      if (userInput) {
        const [title, description, people] = userInput;
        projectsState.addProject(title, description, people);
        this.clearUserInput();
      }
    }
  }
}
