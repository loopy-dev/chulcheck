function formatYear(year: number) {
  return `${year}년`;
}

function formatMonth(month: number) {
  return `${month + 1}월`;
}

function formatDate(date: number) {
  return `${date}일`;
}

export function formatYearMonth(year: number, month: number) {
  return `${formatYear(year)} ${formatMonth(month)}`;
}

export function formatMonthDate(month: number, date: number) {
  return `${formatMonth(month)} ${formatDate(date)}`;
}

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

function parseYYYYMMdd(dateObject: Date) {
  const result: string[] = [];

  const year = getYear(dateObject);
  const month = getMonth(dateObject);
  const date = getDate(dateObject);

  // NOTE - 현재는 year를 그대로 문자열로 변환하여 파싱합니다.
  result.push(parseNumberToString(year, 4));

  // TODO - 중복되는 부분 처리하기
  result.push(parseNumberToString(month, 2));

  result.push(parseNumberToString(date, 2));

  return result;
}

export function parseNumberToString(target: number, numberOfDigits: number) {
  if (numberOfDigits <= 0) {
    throw new Error(
      'invalid number of digits: number of digits must be higher than 0.'
    );
  }

  if (target >= 10 ** (numberOfDigits - 1)) {
    return String(target);
  }

  const ret = String(target);

  return '0'.repeat(numberOfDigits - ret.length).concat(ret);
}

export function yyyyMMdd(dateObject: Date, delimiter = '-') {
  const parsed = parseYYYYMMdd(dateObject);

  return parsed.join(delimiter);
}

interface ParseOptions {
  format: 'YYYY-MM-DD' | 'MM-DD' | 'YYYY-MM';
  delimiter: string;
}

export function parseDate(
  dateObject: Date,
  { format = 'YYYY-MM-DD', delimiter = '-' }: Partial<ParseOptions>
) {
  if (format === 'MM-DD') {
    // return something
  }

  if (format === 'YYYY-MM') {
    // return something
  }

  return yyyyMMdd(dateObject, delimiter);
}
