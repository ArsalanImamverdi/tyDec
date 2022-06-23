import { ParameterNotNull } from "./parameter-notnull-decorator"

describe('Parameter NotNull Tests', () => {
    it('throw exception on null parameter', () => {
        let cl = new ParameterNotNull();
        try {
            let res = cl.method('1', null);
            expect(res).not.toEqual('1:null');
        }
        catch (error) {
            expect(error.message).toEqual('parameter can not be null, name: method');
        }
    });

    it('should return value when parameter is not null', () => {
        let cl = new ParameterNotNull();
        let res = cl.method('1', 2);
        expect(res).toEqual('1:2');
    });
});