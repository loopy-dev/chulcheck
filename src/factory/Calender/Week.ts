import { v4 } from 'uuid';
import type Day from './Day';

class Week {
  readonly id: string;

  week: Day[];

  constructor(week: Day[]) {
    this.id = v4();
    this.week = week;
  }
}

export default Week;
