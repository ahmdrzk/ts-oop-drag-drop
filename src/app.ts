import { Form } from "./components/form";
import { ProjectsList } from "./components/projects-list";
import { ProjectStatus } from "./models/project";

new Form();
new ProjectsList(ProjectStatus.Active);
new ProjectsList(ProjectStatus.Finished);
