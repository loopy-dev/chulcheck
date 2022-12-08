import instance from './instance';
import type { AttendanceResponse, AttendanceResponseQuery } from './types';

/**
 * @description
 * 출석 데이터를 쿼리에 맞게 불러옵니다.
 * 본인의 출석 데이터만 불러올 수 있습니다.
 * @param query `{ month?: number; organization?: number;}`
 * @returns `AttendanceResponse[]`
 */
export async function getAttendanceList(query?: AttendanceResponseQuery) {
  try {
    const response = await instance.get<AttendanceResponse[]>(
      `/api/attendance`,
      {
        params: query || {},
      }
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getMonthlyAttendanceData.');
  }
}

/**
 * @description
 * 요청한 시간에 출석 정보를 추가합니다.
 */
export async function postAttendanceData(organizationId: number) {
  try {
    const response = await instance.post<AttendanceResponse>(
      '/api/attendance',
      { organization: organizationId }
    );

    return response.data;
  } catch {
    throw new Error('error occurred at postAttendanceData.');
  }
}
