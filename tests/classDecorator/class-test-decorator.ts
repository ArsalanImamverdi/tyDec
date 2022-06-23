import { ClassDecoratorDescriptor, tyDec, IClassDecorator } from '../../src';

type newType = { new(...args: any[]): any }

export interface ClassTestDecorator {
    name: string;
}

class ClassTestDecoratorDescriptor extends ClassDecoratorDescriptor<ClassTestDecorator, newType>{
    public implement<T extends newType>(target: T, arg: ClassTestDecorator) {
        target["nameFromDec"] = arg?.name ?? 'name';
    }
}

export const ClassTestDecorator: IClassDecorator<ClassTestDecorator> = tyDec.create(ClassTestDecoratorDescriptor);


interface ClassCons { }
class ClassConsDecoratorDescriptor extends ClassDecoratorDescriptor<ClassCons, newType>{
    public implement<F extends newType>(target: F, arg: ClassCons) {
        return class extends target {
            test: number = 100;
        }
    }

}
export const ClassCons: IClassDecorator<ClassCons> = tyDec.create(ClassConsDecoratorDescriptor);



export class SomeClass {
    id: number;
}
interface ClassConstraint { }
class ClassConstraintDecoratorDescriptor extends ClassDecoratorDescriptor<ClassConstraint, SomeClass>{
    public implement(target: SomeClass, arg: ClassConstraint) {
        target.id = 100;
    }
}
export const ClassConstraint: IClassDecorator<ClassCons, SomeClass> = tyDec.create(ClassConstraintDecoratorDescriptor);



@ClassTestDecorator({ name: 'ClassTest' })
@ClassCons()
@ClassConstraint()
export class ClassTest extends SomeClass {
}

