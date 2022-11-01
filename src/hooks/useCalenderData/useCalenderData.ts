import { useCallback, useState } from 'react';
import {
  getMonthlyAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import type { Attendance } from '../../api/types';

/**
 * @description
 * 사용자의 출석 데이터를 다루는 hook입니다.
 * 데이터에 대한 기본적인 CRUD를 다룹니다.
 */
function useCalenderData() {
  const [attendence, setAttendence] = useState<Attendance[]>([]);

  // ANCHOR - post 방식에 따라서 달라질 수도 있음
  const getMonthlyAttendance = useCallback(async (month: number) => {
    try {
      const response = await getMonthlyAttendanceData(month);

      const attendanceData: Attendance[] = response.map((data) => ({
        ...data,
        user: data.user.username,
      }));

      setAttendence((prev) => [...prev, ...attendanceData]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // TODO - 정렬 알고리즘 구현하기
  const addAttendence = useCallback(async () => {
    try {
      const response = await postAttendanceData();
      setAttendence((prev) => [
        ...prev,
        { ...response, user: response.user.username },
      ]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { attendence, addAttendence, getMonthlyAttendance };
}

export default useCalenderData;
