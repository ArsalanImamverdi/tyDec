import { IDecorator } from "../i-decorator";

export interface IMethodDecorator<T> extends IDecorator<T> {
  (arg?: T): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any
}
