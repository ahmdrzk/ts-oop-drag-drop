import { Form } from "./components/form.js";
import { ProjectsList } from "./components/projects-list.js";
import { ProjectStatus } from "./models/project.js";

new Form();
new ProjectsList(ProjectStatus.Active);
new ProjectsList(ProjectStatus.Finished);
