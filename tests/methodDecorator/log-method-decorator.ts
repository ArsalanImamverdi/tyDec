import { tyDec, IMethodDecorator, MethodDecoratorDescriptor } from "../../src"

export interface Log {
}

export class LogDecoratorDescriptor<T> extends MethodDecoratorDescriptor<Log> {
    public implement(target: any, propertyKey: string, descriptor: PropertyDescriptor, arg: Log) {
        let func = descriptor.value;
        descriptor.value = (...args: any[]) => {
            console.log(`method ${propertyKey} from ${target.constructor.name} is called`);
            let value = func.apply(target, args);
            console.log(`method ${propertyKey} finished`);
            return value;
        }
    }

}

export const Log: IMethodDecorator<Log> = tyDec.create(LogDecoratorDescriptor);

export class LogTest {

    @Log()
    someMethod(arg1: string, arg2: number) {
        return `${arg1}__${arg2}`
    }
}