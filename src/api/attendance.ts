import instance from './instance';
import type { Attendance, AttendanceResponse } from './types';

export async function getMonthlyAttendanceData(month: number) {
  if (month < 0 || month > 12) {
    throw new Error(
      'month must be higher than 0 and lower than or equal to 12.',
    );
  }

  try {
    const response = await instance.get<AttendanceResponse[]>(
      `/api/attendance/${month}`,
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getMonthlyAttendanceData.');
  }
}

/**
 * @description
 * 요청한 시간에 출석 정보를 추가합니다.
 * ANCHOR - 해당 부분은 추후 room 관련 컨셉이 정해지면 변경되야 합니다.
 */
export async function postAttendanceData() {
  // TODO - 로직 추가하기
  try {
    const response = await instance.post<AttendanceResponse>('/api/attendance');

    return response.data;
  } catch {
    throw new Error('error occurred at postAttendanceData.');
  }
}

export const mockData: Attendance[] = [
  {
    id: 1,
    user: '1',
    timestamp: '2022-10-01',
  },
  {
    id: 2,
    user: '1',
    timestamp: '2022-10-02',
  },
  {
    id: 3,
    user: '1',
    timestamp: '2022-10-03',
  },
  {
    id: 4,
    user: '1',
    timestamp: '2022-10-04',
  },
  {
    id: 5,
    user: '1',
    timestamp: '2022-10-05',
  },
  {
    id: 6,
    user: '1',
    timestamp: '2022-10-06',
  },
  {
    id: 7,
    user: '1',
    timestamp: '2022-10-07',
  },
  {
    id: 8,
    user: '1',
    timestamp: '2022-10-08',
  },
  {
    id: 9,
    user: '1',
    timestamp: '2022-10-09',
  },
  {
    id: 10,
    user: '1',
    timestamp: '2022-10-10',
  },
];
