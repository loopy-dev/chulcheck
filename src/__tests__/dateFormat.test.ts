import { formatDate } from '../utils/dateFormat';

describe('date format', () => {
  it('format date, options: { format: "YYYY-MM-DD", delimiter: "-" }', () => {
    expect(
      formatDate(new Date(2022, 9, 9), { format: 'YYYY-MM-DD', delimiter: '-' })
    ).toBe('2022-10-09');
  });

  it('format date, options: { format: "YYYY-MM", delimiter: "%" }', () => {
    expect(
      formatDate(new Date(2022, 9, 9), { format: 'YYYY-MM', delimiter: '%' })
    ).toBe('2022%10');
  });

  it('format date, options: { format: "MM-DD", delimiter: " " }', () => {
    expect(
      formatDate(new Date(2022, 9, 9), { format: 'MM-DD', delimiter: ' ' })
    ).toBe('10 09');
  });
});
