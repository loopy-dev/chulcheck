import { formatDate, formatUTCTime } from '../utils/dateFormat';

// TODO - test 통과 위하여 utc 형식으로 변경한 뒤, 포맷 진행할 것
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

  // getHours, getMinutes 사용 시 ci 환경과 시간대가 다르므로 테스트코드가 오류남
  it('format time, options: { format: "HH:MM:SS", delimiter: ":" }', () => {
    expect(
      formatUTCTime(new Date(1667975238660), {
        format: 'HH:MM:SS',
        delimiter: ':',
      })
    ).toBe('06:27:18');
  });
});
