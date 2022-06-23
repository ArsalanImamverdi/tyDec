# tyDec

tyDec is a decorator helper package in typescript. With Dec you can create decorators easily.

## Installing

```
npm install tyDec
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Documentation

Here how to use the package:

First of all, create an interface, if decorator has any parameter it should define here:

```typescript
interface ShouldbeLessThan {
  value: number;
}
```

The next step is to create a `DecoratorDescriptor` class, this will have the implementation of the dectorator

```typescript
class ShouldbeLessThanDecoratorDescriptor extends PropertyDecoratorDescriptor<ShouldbeLessThan> {
  public implement(
    target: any,
    propertyKey: string,
    arg: PropertyTestDecorator
  ) {
    let value = target[propertyKey];
    Object.defineProperty(target, propertyKey, {
      set: newValue => {
        if (newValue > arg.value) {
          throw new Error(`value can not be greater than ${arg.max}`);
          return;
        }
        value = newValue;
      },
      get: () => {
        return value;
      },
    });
  }
}
```

Finally create and export the decorator:

```typescript
export const ShouldbeLessThan: IPropertyDecorator<ShouldbeLessThan> =
  tyDec.create(ShouldbeLessThanDecoratorDescriptor);
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/ArsalanImamverdi/tyDec/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **MohamadArsalan Imamverdi** - _Initial work_ - [ArsalanImamverdi](https://github.com/ArsalanImamverdi)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
