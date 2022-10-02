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
