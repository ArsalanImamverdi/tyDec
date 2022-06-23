import { PeopertyTest } from "./property-test-decorator"

test('PropertyDecoratorTestValueMoreThanMax', () => {
    let prop = new PeopertyTest();
    try {
        prop.value = 100;
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
})

test('PropertyDecoratorTestValue5', () => {
    let prop = new PeopertyTest();
    prop.value = 5;
    expect(prop.value).toBe(5);
});