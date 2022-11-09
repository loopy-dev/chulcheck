import parseNumberToString from './parse';

function getYear(dateObject: Date) {
  return dateObject.getFullYear();
}

// NOTE - Date 객체로부터 반환받은 값에 1이 더해짐에 유의해야 합니다.
function getMonth(dateObject: Date) {
  return dateObject.getMonth() + 1;
}

function getDate(dateObject: Date) {
  return dateObject.getDate();
}

function parseDate(dateStringArr: string[], delimiter: string) {
  return dateStringArr.join(delimiter);
}

function getYYYYmmDD(
  year: number,
  month: number,
  date: number,
  delimiter: string
) {
  return parseDate(
    [
      parseNumberToString(year, 4),
      parseNumberToString(month, 2),
      parseNumberToString(date, 2),
    ],
    delimiter
  );
}

function getYYYYmm(year: number, month: number, delimiter: string) {
  return parseDate(
    [parseNumberToString(year, 4), parseNumberToString(month, 2)],
    delimiter
  );
}

function getMMdd(month: number, date: number, delimiter: string) {
  return parseDate(
    [parseNumberToString(month, 2), parseNumberToString(date, 2)],
    delimiter
  );
}

interface ParseOptions {
  format: 'YYYY-MM-DD' | 'MM-DD' | 'YYYY-MM';
  delimiter: string;
}

export function formatDate(
  dateObject: Date,
  { format = 'YYYY-MM-DD', delimiter = '-' }: Partial<ParseOptions>
) {
  const year = getYear(dateObject);
  const month = getMonth(dateObject);
  const date = getDate(dateObject);

  if (format === 'YYYY-MM') {
    return getYYYYmm(year, month, delimiter);
  }

  if (format === 'MM-DD') {
    return getMMdd(month, date, delimiter);
  }

  return getYYYYmmDD(year, month, date, delimiter);
}

interface ParseTimeOptions {
  format: 'HH:MM:SS';
  delimiter: string;
}

/**
 * @description
 * 시간을 포맷하는 함수
 * NOTE - 이 함수는 임시 함수입니다. 빠른 시일 내에 변경 예정입니다.
 */
export function formatTime(
  dateObject: Date,
  { format = 'HH:MM:SS', delimiter = ':' }: Partial<ParseTimeOptions>
) {
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  if (format === 'HH:MM:SS') {
    // do nothing
  }

  return parseDate(
    [
      parseNumberToString(hours, 2),
      parseNumberToString(minutes, 2),
      parseNumberToString(seconds, 2),
    ],
    delimiter
  );
}
