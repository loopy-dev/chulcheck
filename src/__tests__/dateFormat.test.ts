import { yyyyMMdd, parseNumberToString } from '../utils/dateFormat';

describe('date format', () => {
  it('parse date number to YYYY%MM%DD with "-" delimiter', () => {
    expect(yyyyMMdd(new Date(2022, 9, 31))).toBe('2022-10-31');
  });

  it('parse date number to YYYY%MM%DD with "-" delimiter, date is smaller than 10', () => {
    expect(yyyyMMdd(new Date('2022-10-09'))).toBe('2022-10-09');
  });

  it('parse date number to YYYY%MM%DD with "-" delimiter, date and month are smaller than 10', () => {
    expect(yyyyMMdd(new Date(2022, 0, 1))).toBe('2022-01-01');
  });

  it('parse date number to YYY%MM%DD with "%" delimiter', () => {
    expect(yyyyMMdd(new Date(2022, 0, 1), '%')).toBe('2022%01%01');
  });

  it('parse number to string, number of digit is 2, target is 5', () => {
    expect(parseNumberToString(5, 2)).toBe('05');
  });

  it('parse number to string, number of digit is 2, target is 99', () => {
    expect(parseNumberToString(99, 2)).toBe('99');
  });

  it('parse number to string, number of digit is 2, target is 999', () => {
    expect(parseNumberToString(999, 2)).toBe('999');
  });

  it('parse number to string, number of digit is 1, target is 0', () => {
    expect(parseNumberToString(0, 1)).toBe('0');
  });

  it('throws error if number of digit is lower than or equal to 0', () => {
    expect(() => parseNumberToString(999, 0)).toThrow();
  });
});
