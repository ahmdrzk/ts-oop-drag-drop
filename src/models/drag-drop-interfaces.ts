export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragEnterHandler?(event: DragEvent): void;
  dragOverHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
}
