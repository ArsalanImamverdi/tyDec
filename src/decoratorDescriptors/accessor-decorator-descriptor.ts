import { DecoratorDescriptor } from "../decorator-descriptor";

export abstract class AccessorDecoratorDescriptor<T> extends DecoratorDescriptor<((target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => any), T>{
    public get = (arg: T): ((target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => any) => {
        this.initialize(arg);
        return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor): any => {
            return this.implement(target, propertyKey, propertyDescriptor, arg);
        }
    }
    public abstract implement(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor, arg: T): any
}
