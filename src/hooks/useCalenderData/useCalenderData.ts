import { useCallback, useState } from 'react';
import { mockData } from '../../api/attendance';
import type { Attendance } from '../../api/attendance';

/**
 * @description
 * 사용자의 출석 데이터를 다루는 hook입니다.
 * 데이터에 대한 기본적인 CRUD를 다룹니다.
 */
function useCalenderData() {
  const [attendence, setAttendence] = useState(mockData);

  // 출석 정보 불러오기

  // 클릭 시 데이터를 배열에 추가하기
  const addAttendence = useCallback((newData: Attendance) => {
    setAttendence((prev) => [...prev, newData]);
  }, []);

  return { attendence, addAttendence };
}

export default useCalenderData;
