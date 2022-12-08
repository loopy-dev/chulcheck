import { useCallback, useState, useMemo } from 'react';
import {
  getAttendanceList as getAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import formatAttendanceData from './useAttendance.helper';
import type {
  AttendanceResponse,
  AttendanceResponseQuery,
} from '../../api/types';

export type GetAttendanceListHandler = (
  query?: AttendanceResponseQuery
) => Promise<void>;
export type AddAttendanceHandler = (organizationId: number) => Promise<void>;

/**
 * @description
 * 사용자의 출석 데이터를 다루는 hook입니다.
 * 데이터에 대한 기본적인 CRUD를 다룹니다.
 */
function useAttendance() {
  const [attendance, setAttendance] = useState<AttendanceResponse[]>([]);

  /**
   * @description
   * 월별 출석 데이터를 불러오는 함수입니다.
   * @param query `AttendanceResponseQuery`
   */
  const getAttendanceList: GetAttendanceListHandler = useCallback(
    async (query) => {
      try {
        const response = await getAttendanceData(query);

        setAttendance((prev) => [...prev, ...response]);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const addAttendance: AddAttendanceHandler = useCallback(
    async (organizationId) => {
      try {
        const response = await postAttendanceData(organizationId);
        setAttendance((prev) => [...prev, response]);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const attendanceMemo = useMemo(
    () => formatAttendanceData(attendance),
    [attendance]
  );

  return {
    attendance: attendanceMemo,
    addAttendance,
    getAttendanceList,
  };
}

export default useAttendance;
