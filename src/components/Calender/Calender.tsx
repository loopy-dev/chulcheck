import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
  useAttendanceDispatchContext,
  useAttendanceStateContext,
} from '../../contexts/AttendanceProvider';
import useCalender from '../../hooks/useCalender';
import CalenderHeader from './CalenderHeader';
import CalenderInner from './CalenderInner';

export type CellClickEventHandler = (timestamp: string) => void;

const Calender = () => {
  const {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  } = useCalender();
  const attendance = useAttendanceStateContext();
  const { getAttendanceList } = useAttendanceDispatchContext();

  /**
   * @description
   * 클릭 시 출석 체크를 진행한다.
   * ANCHOR
   * 현재는 임시로 구현된 부분이므로, 추후 변경되어야 함
   * try...catch block을 이용하여 정시에 출석체크 했는지 체크
   * 이미 출석했다면, 눌러도 반응이 없도록 해야 함
   * 자료 구조를 set으로 바꿔야 할 필요성도 있음
   * 출석하기 버튼은 따로 두고, 달력 cell 클릭 시 출석 정보를 불러오도록 하기
   * TODO - 클릭 시 출석 상세 정보를 불러오도록 수정하기
   */
  const handleClickItem: CellClickEventHandler = useCallback(
    (timestamp: string) => {
      console.log(timestamp);
    },
    []
  );

  // NOTE - 오늘 날짜의 달만 불러오고, 그 뒤에는 버튼을 통해서 추가한다.
  useEffect(() => {
    const month = new Date().getMonth();
    getAttendanceList({ month: month + 1 });
  }, [getAttendanceList]);

  return (
    <Container>
      <CalenderHeader
        title={`${calender.year}년 ${calender.month + 1}월`}
        onCurrent={setCurrentMonthCalender}
        onNext={setNextMonthCalender}
        onPrev={setPrevMonthCalender}
      />
      <CalenderInner
        calender={calender}
        items={attendance}
        onClickItem={handleClickItem}
      />
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
