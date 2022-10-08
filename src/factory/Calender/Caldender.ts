import Day from './Day';
import Week from './Week';

function validate(year: number, month: number) {
  if (year < 1980) {
    throw new Error('year must be greater than 1980.');
  }

  if (month < 0) {
    throw new Error('month must be greater than or equal to 0.');
  }

  if (month >= 12) {
    throw new Error('month must be lower than 12.');
  }
}

class Calender {
  private readonly ROW_LENGTH = 6;

  private readonly COL_LENGTH = 7;

  year: number;

  month: number;

  calender: Week[];

  constructor(year: number, month: number) {
    validate(year, month);
    this.year = year;
    this.month = month;
    this.calender = [];

    this.fill();
  }

  fill() {
    const offset = new Date(this.year, this.month, 1).getDay();

    let count = 0;

    for (let i = 0; i < this.ROW_LENGTH; i += 1) {
      const week: Day[] = [];

      for (let j = 0; j < this.COL_LENGTH; j += 1) {
        const today = new Date(this.year, this.month, 1 - offset + count);

        week.push(
          new Day(today.getFullYear(), today.getMonth(), today.getDate()),
        );
        count += 1;
      }

      this.calender.push(new Week(week));
    }
  }
}

export default Calender;
