type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const throwError = (errorStr: string) => { throw new Error(errorStr) };
    return {
        toBe: (value: any) => value === val || throwError('Not Equal'),
        notToBe: (value: any) => value !== val || throwError('Equal'),
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */