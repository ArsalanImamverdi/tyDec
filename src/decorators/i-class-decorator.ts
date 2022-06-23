import { IDecorator } from "../i-decorator";
import { Type } from "../type";

type defaultClassConstructorType = any
export interface IClassDecorator<T, U = defaultClassConstructorType> extends IDecorator<T> {
  <F extends U>(arg?: T): ((target: Type<F>) => any);
}
