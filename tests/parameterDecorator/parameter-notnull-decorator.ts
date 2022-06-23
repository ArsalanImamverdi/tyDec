import { tyDec, IMethodDecorator, IParameterDecorator, MethodDecoratorDescriptor, ParameterDecoratorDescriptor } from "../../src";

export interface NotNull { }

class NotNullDecoratorDescriptor extends ParameterDecoratorDescriptor<NotNull>{
    public implement(target: any, propertyKey: string | Symbol, parameterIndex: number, arg: NotNull) {
        if (!target['validations']) target["validations"] = [];
        target["validations"].push({ propertyKey: propertyKey, parameterIndex: parameterIndex });
    }
}
export const NotNull: IParameterDecorator<NotNull> = tyDec.create(NotNullDecoratorDescriptor);



export interface Validate { }
class ValidateDecoratorDescriptor extends MethodDecoratorDescriptor<Validate>{
    public implement(target: any, propertyKey: string, descriptor: PropertyDescriptor, arg: Validate) {
        let validations = target["validations"];
        if (!validations) return;

        let validate = validations.find(item => item.propertyKey == propertyKey);
        if (!validate) return;

        let originalMethod = descriptor.value;
        descriptor.value = (...args: any[]) => {
            if (args[validate.parameterIndex] == null) throw Error(`parameter can not be null, name: ${propertyKey}`);
            return originalMethod(...args);
        }
    }
}

export const Validate: IMethodDecorator<Validate> = tyDec.create(ValidateDecoratorDescriptor);

export class ParameterNotNull {
    @Validate()
    public method(arg: string, @NotNull() num: number) {
        return `${arg}:${num}`
    }
}
