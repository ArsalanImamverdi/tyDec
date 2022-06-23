import { IDecorator } from "../i-decorator";

export interface IPropertyDecorator<T> extends IDecorator<T> {
  (arg?: T): (target: any, propertyKey: string) => any
}
