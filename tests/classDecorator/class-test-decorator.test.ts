import { ClassTest } from "./class-test-decorator";

test('ClassTest', () => {
    let classTest = new ClassTest();
    expect(classTest.constructor["nameFromDec"]).toBe('ClassTest');
})

test('ClassCons', () => {
    let classTest = new ClassTest();
    expect((<any>classTest).test).toEqual(100);
})

test('ClassConstraint', () => {
    let classTest = new ClassTest();
})