import { LogTest } from "./log-method-decorator";

test('methodLogDecoratorTest', () => {
    let logTest = new LogTest();
    let a = logTest.someMethod('1', 2);
    expect('1__2').toBe(a);
})