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
    <CalenderContainer>
      <CalenderHeader>
        <CalenderHeaderTitle>
          {formatYearMonth(calender.year, calender.month)}
        </CalenderHeaderTitle>
        <CalenderController>
          <CalenderPrevButton type="button" onClick={setPrevMonthCalender} />
          <CalenderCurrentButton
            type="button"
            onClick={setCurrentMonthCalender}
          />
          <CalenderNextButton type="button" onClick={setNextMonthCalender} />
        </CalenderController>
      </CalenderHeader>
      <CalenderInner calender={calender.calender} month={calender.month} />
    </CalenderContainer>
  );
};

export default Calender;

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const CalenderHeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalenderController = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const CalenderButton = styled.button`
  flex-shrink: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`;

const CalenderPrevButton = styled(CalenderButton)`
  &::after {
    content: '<';
  }
`;

const CalenderCurrentButton = styled(CalenderButton)`
  &::after {
    content: '오늘';
  }
`;

const CalenderNextButton = styled(CalenderButton)`
  &::after {
    content: '>';
  }
`;
