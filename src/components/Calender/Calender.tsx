import styled from 'styled-components';
import useCalender from '../../hooks/useCalender';
import { formatYearMonth } from '../../utils/dateFormat';
import CalenderInner from './CalenderInner';

const Calender = () => {
  const {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  } = useCalender();

  return (
    <div>
      {formatYearMonth(calender.year, calender.month)}
      <CalenderController>
        <button type="button" onClick={setPrevMonthCalender}>
          이전
        </button>
        <button type="button" onClick={setCurrentMonthCalender}>
          오늘
        </button>
        <button type="button" onClick={setNextMonthCalender}>
          다음
        </button>
      </CalenderController>
      <CalenderInner calender={calender.calender} />
    </div>
  );
};

export default Calender;

const CalenderController = styled.div`
  display: flex;
  justify-content: flex-end;
`;
