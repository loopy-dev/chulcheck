import { useState } from 'react';
import { mockData } from '../../api/attendence';

/**
 * @description
 * 사용자의 출석 데이터를 다루는 hook입니다.
 * 데이터에 대한 기본적인 CRUD를 다룹니다.
 */
function useCalenderData() {
  const [data, setData] = useState(mockData);

  // 출석 정보 불러오기

  // 출석 정보 업데이트 하기

  return data;
}

export default useCalenderData;
