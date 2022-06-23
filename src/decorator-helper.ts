import { DecoratorDescriptor } from "./decorator-descriptor";

export class tyDec {
  public static create<T, U>(decoratorDescriptorType: { new(): DecoratorDescriptor<T, U> }) {
    let decoratorDescriptor = new decoratorDescriptorType();
    return decoratorDescriptor.get as unknown as { new(...arg: any[]): any; (...args: any[]): (...args: any) => any }
  }
}
