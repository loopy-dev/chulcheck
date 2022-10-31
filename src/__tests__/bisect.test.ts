import { bisectLeft, bisectRight } from '../utils/bisect';

describe('bisect', () => {
  const arr = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6];

  it('returns index', () => {
    expect(bisectLeft(arr, 2)).toBe(1);
    expect(bisectRight(arr, 2)).toBe(4);
  });

  it('returns count', () => {
    expect(bisectRight(arr, 2) - bisectLeft(arr, 2)).toBe(3);
  });

  it('has only one target in the array', () => {
    expect(bisectRight(arr, 1) - bisectLeft(arr, 1)).toBe(1);
  });

  it('has no target in the array', () => {
    expect(bisectRight(arr, 999) - bisectLeft(arr, 999)).toBe(0);
  });

  it('has no target in the array', () => {
    expect(bisectRight(arr, -1) - bisectLeft(arr, -1)).toBe(0);
  });

  it('find target with wrong range', () => {
    expect(bisectLeft(arr, 3, 8, arr.length)).toBe(8);
    expect(bisectRight(arr, 3, 8, arr.length)).toBe(8);
  });

  it('throws error when lo is lower than 0', () => {
    // NOTE - to test error, you have to wrap the code in a function
    expect(() => bisectLeft(arr, 3, -1)).toThrow();
    expect(() => bisectRight(arr, 3, -1)).toThrow();
  });
});
