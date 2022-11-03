import { useCallback, useState, useMemo } from 'react';
import {
  getMonthlyAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import formatAttendanceData from './useAttendance.helper';
import type { AttendanceResponse } from '../../api/types';

/**
 * @description
 * 사용자의 출석 데이터를 다루는 hook입니다.
 * 데이터에 대한 기본적인 CRUD를 다룹니다.
 */
function useAttendance() {
  const [attendance, setAttendence] = useState<AttendanceResponse[]>([]);

  /**
   * @description
   * 월별 출석 데이터를 불러오는 함수입니다.
   * @param month 출석을 불러올 1부터 12 사이의 숫자
   */
  const getMonthlyAttendance = useCallback(async (month: number) => {
    try {
      const response = await getMonthlyAttendanceData(month);

      setAttendence((prev) => [...prev, ...response]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // TODO - 정렬 알고리즘 구현하기
  const addAttendence = useCallback(async () => {
    try {
      const response = await postAttendanceData();
      setAttendence((prev) => [...prev, response]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const attendanceMemo = useMemo(
    () => formatAttendanceData(attendance),
    [attendance]
  );

  return { attendance: attendanceMemo, addAttendence, getMonthlyAttendance };
}

export default useAttendance;
