import { DecoratorDescriptor } from "../decorator-descriptor";
export abstract class ClassDecoratorDescriptor<T, U = Function> extends DecoratorDescriptor<(<F extends U>(target: F) => any), T>{
  public get = (arg: T): (<G extends U>(target: G) => any) => {
    this.initialize(arg);
    return (target: U): any => {
      return this.implement(target, arg);
    }
  }
  public abstract implement(target: U, arg: T): any;
}
