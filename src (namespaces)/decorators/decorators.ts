namespace App {
  export function AutoBind(_1: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod: Function = descriptor.value;

    const adjustedDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        return originalMethod.bind(this);
      },
    };

    return adjustedDescriptor;
  }
}
