import { IDecorator } from "../i-decorator";

export interface IParameterDecorator<T> extends IDecorator<T> {
  (arg?: T): (target: any, propertyKey: string | Symbol, parameterIndex: number) => any
}
