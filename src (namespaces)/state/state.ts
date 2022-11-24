namespace App {
  type Listener<T> = (items: T[]) => void;

  export abstract class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>): void {
      this.listeners.push(listenerFn);
    }
  }
}
