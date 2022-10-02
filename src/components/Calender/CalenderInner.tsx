import styled from 'styled-components';
import { formatMonthDate } from '../../utils/dateFormat';
import type { Calender } from '../../hooks/useCalender/useCalender.helper';

interface Props {
  calender: Calender;
  month: number;
}

const CalenderInner = ({ calender, month }: Props) => (
  <CalenderMatrix>
    {Object.entries(calender).map(([key, row]) => (
      <CalenderRow key={key}>
        {row.map((el, index) => (
          <CalenderColumn
            key={`${el.year}${el.month}${el.date}`}
            isWeekend={index === 0 || index === 6}
          >
            <CalenderBlockTitle>
              <CalenderDate
                isCurrentDate={new Date(Date.now()).getDate() === el.date}
                isCurrentMonth={new Date(Date.now()).getMonth() === el.month}
                isUserSetMonth={month === el.month}
              >
                {el.date === 1 ? formatMonthDate(el.month, el.date) : el.date}
              </CalenderDate>
            </CalenderBlockTitle>
          </CalenderColumn>
        ))}
      </CalenderRow>
    ))}
  </CalenderMatrix>
);

export default CalenderInner;

interface CalenderColumnProps {
  isWeekend: boolean;
}

interface CalenderDateProps {
  isUserSetMonth: boolean;
  isCurrentMonth: boolean;
  isCurrentDate: boolean;
}

const CalenderMatrix = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-rows: 1fr;
  border-top: 1px solid rgb(233, 233, 231);
  border-left: 1px solid rgb(233, 233, 231);
  border-radius: 2px;
`;

const CalenderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-columns: 1fr;
  position: relative;
`;

const CalenderColumn = styled.div<CalenderColumnProps>`
  position: relative;
  height: 100px;
  padding: 0.5rem;
  border-right: 1px solid rgb(233, 233, 231);
  border-bottom: 1px solid rgb(233, 233, 231);
  background-color: ${({ isWeekend }) =>
    isWeekend ? 'rgb(251, 251, 250)' : '#ffffff'};

  cursor: pointer;

  &:hover {
    background-color: rgba(233, 233, 231, 0.3);
  }
`;

const CalenderBlockTitle = styled.div`
  display: flex;
  // TODO: 나중에 지울 것
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`;

const CalenderDate = styled.span<CalenderDateProps>`
  display: inline-block;
  min-width: 22px;
  min-height: 22px;
  border-radius: 50%;

  color: ${({ isCurrentMonth, isCurrentDate, isUserSetMonth }) => {
    if (isCurrentMonth && isCurrentDate) {
      return `#ffffff`;
    }

    if (!isUserSetMonth) {
      return `rgba(55, 53, 47, 0.5)`;
    }

    return ``;
  }};

  background-color: ${({ isCurrentMonth, isCurrentDate }) =>
    isCurrentMonth && isCurrentDate ? `rgb(235, 87, 87)` : ''};

  font-size: 14px;
`;
