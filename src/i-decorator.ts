export interface IDecorator<T> {
  new(arg: T): IDecorator<T>
}
