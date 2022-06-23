import { tyDec, IPropertyDecorator, PropertyDecoratorDescriptor } from "../../src";

export interface PropertyTestDecorator {
    max: number;
}

class PropertyTestDecoratorDescriptor extends PropertyDecoratorDescriptor<PropertyTestDecorator>{
    public implement(target: any, propertyKey: string, arg: PropertyTestDecorator) {
        let value = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            set: (newValue) => {
                if (newValue > arg.max) {
                    throw new Error(`value can not be greater than max:${arg.max}`);
                    return;
                }
                value = newValue;
            },
            get: () => {
                return value;
            }
        });
    }
}

export const PropertyTestDecorator: IPropertyDecorator<PropertyTestDecorator> = tyDec.create(PropertyTestDecoratorDescriptor);

export class PeopertyTest {

    @PropertyTestDecorator({ max: 10 })
    value: number;
}