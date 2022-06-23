import { DecoratorDescriptor } from "../decorator-descriptor";

export abstract class PropertyDecoratorDescriptor<T> extends DecoratorDescriptor<((target: any, propertyKey: string) => any), T>{
  public get = (arg: T): ((target: any, propertyKey: string) => any) => {
    this.initialize(arg);
    return (target: any, propertyKey: string): any => {
      return this.implement(target, propertyKey, arg);
    }
  }
  public abstract implement(target: any, propertyKey: string, arg: T): any
}
