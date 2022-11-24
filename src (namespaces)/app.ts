/// <reference path="state/state.ts" />
/// <reference path="state/projects-state.ts" />
/// <reference path="models/project.ts" />
/// <reference path="models/drag-drop-interfaces.ts" />
/// <reference path="utils/validate.ts" />
/// <reference path="decorators/decorators.ts" />
/// <reference path="components/component.ts" />
/// <reference path="components/form.ts" />
/// <reference path="components/projects-list.ts" />
/// <reference path="components/project-item.ts" />

namespace App {
  new Form();
  new ProjectsList(ProjectStatus.Active);
  new ProjectsList(ProjectStatus.Finished);
}
