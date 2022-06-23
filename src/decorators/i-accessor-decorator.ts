import { IDecorator } from "../i-decorator";

export interface IAccessorDecorator<T> extends IDecorator<T> {
    (arg?: T): (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => any
}
