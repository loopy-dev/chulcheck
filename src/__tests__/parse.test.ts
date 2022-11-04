import parseNumberToString from '../utils/parse';

describe('parse', () => {
  it('parse 9, number of digits: 2', () => {
    expect(parseNumberToString(9, 2)).toBe('09');
  });

  it('parse 999, number of digits: 2', () => {
    expect(parseNumberToString(999, 2)).toBe('999');
  });

  it('parse 999, number of digits: 1', () => {
    expect(parseNumberToString(999, 1)).toBe('999');
  });

  it('throw error if number of digits < 1', () => {
    expect(() => parseNumberToString(999, 0)).toThrow();
  });
});
