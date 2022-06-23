export abstract class DecoratorDescriptor<T, U>{
  constructor() {
  }
  public abstract get(arg: U): T
  public abstract implement(...args: any[]): any;
  public initialize(arg: U) { }
}
