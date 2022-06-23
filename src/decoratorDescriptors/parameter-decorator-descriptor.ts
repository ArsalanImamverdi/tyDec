import { DecoratorDescriptor } from "../decorator-descriptor";

export abstract class ParameterDecoratorDescriptor<T> extends DecoratorDescriptor<((target: any, propertyKey: string | Symbol, parameterIndex: number) => any), T>{
  public get = (arg: T): ((target: any, propertyKey: string | Symbol, parameterIndex: number) => any) => {
    this.initialize(arg);
    return (target: any, propertyKey: string | Symbol, parameterIndex: number): any => {
      return this.implement(target, propertyKey, parameterIndex, arg);
    }
  }
  public abstract implement(target: any, propertyKey: string | Symbol, parameterIndex: number, arg: T): any
}
