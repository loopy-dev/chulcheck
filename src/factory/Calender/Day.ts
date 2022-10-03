import { v4 } from 'uuid';

class Day {
  readonly id: string;

  year: number;

  month: number;

  date: number;

  constructor(year: number, month: number, date: number) {
    this.id = v4();
    this.year = year;
    this.month = month;
    this.date = date;
  }
}

export default Day;
