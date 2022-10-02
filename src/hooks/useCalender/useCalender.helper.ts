export default function getDate(today: number | string) {
  const date = new Date(today);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  };
}
