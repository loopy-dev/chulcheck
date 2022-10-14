import type { User } from './auth';

export interface Attendance {
  id: string;
  user: string;
  timestamp: string;
}

export type AttendanceResponse =
  | Pick<Attendance, 'id' | 'timestamp'>
  | { user: User };

export const mockData: Attendance[] = [
  {
    id: '1',
    user: '1',
    timestamp: '2022-10-01',
  },
  {
    id: '2',
    user: '1',
    timestamp: '2022-10-02',
  },
  {
    id: '3',
    user: '1',
    timestamp: '2022-10-03',
  },
  {
    id: '4',
    user: '1',
    timestamp: '2022-10-04',
  },
  {
    id: '5',
    user: '1',
    timestamp: '2022-10-05',
  },
  {
    id: '6',
    user: '1',
    timestamp: '2022-10-06',
  },
  {
    id: '7',
    user: '1',
    timestamp: '2022-10-07',
  },
  {
    id: '8',
    user: '1',
    timestamp: '2022-10-08',
  },
  {
    id: '9',
    user: '1',
    timestamp: '2022-10-09',
  },
  {
    id: '10',
    user: '1',
    timestamp: '2022-10-10',
  },
];
