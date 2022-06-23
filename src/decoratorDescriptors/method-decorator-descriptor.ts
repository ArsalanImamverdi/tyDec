import { DecoratorDescriptor } from "../decorator-descriptor";

export abstract class MethodDecoratorDescriptor<T> extends DecoratorDescriptor<((target: any, propertyKey: string, descriptor: PropertyDescriptor) => any), T>{
  public get = (arg: T): ((target: any, propertyKey: string, descriptor: PropertyDescriptor) => any) => {
    this.initialize(arg);
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
      return this.implement(target, propertyKey, descriptor, arg);
    }
  }
  public abstract implement(target: any, propertyKey: string, descriptor: PropertyDescriptor, arg: T): any;

}
