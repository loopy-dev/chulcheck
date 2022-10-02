import styled from 'styled-components';
import { formatMonthDate } from '../../utils/dateFormat';
import type Calender from '../../factory/Calender/Caldender';

interface Props {
  calender: Calender;
  onClickItem?: React.MouseEventHandler<HTMLDivElement>;
}

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const CalenderInner = ({ calender, onClickItem }: Props) => {
  const date = new Date(Date.now());

  return (
    <Month>
      <Row>
        {days.map((day, index) => (
          <Title key={day} isWeekend={index === 0 || index === 6}>
            {day}
          </Title>
        ))}
      </Row>
      {calender.calender.map(({ id, week }) => (
        <Row key={id}>
          {week.map((day, index) => (
            <Column
              key={day.id}
              isWeekend={index === 0 || index === 6}
              onClick={onClickItem}
            >
              <ColumnHeader>
                <CalenderDate
                  isCurrentDate={date.getDate() === day.date}
                  isCurrentMonth={date.getMonth() === day.month}
                  isCurrentYear={date.getFullYear() === day.year}
                  isUserSetMonth={calender.month === day.month}
                >
                  {day.date === 1
                    ? formatMonthDate(day.month, day.date)
                    : day.date}
                </CalenderDate>
              </ColumnHeader>
            </Column>
          ))}
          {/** TODO: 여기에 데이터 들어가야 함 */}
        </Row>
      ))}
    </Month>
  );
};

export default CalenderInner;

interface CalenderColumnProps {
  isWeekend: boolean;
}

interface CalenderDateProps {
  isUserSetMonth: boolean;
  isCurrentMonth: boolean;
  isCurrentYear: boolean;
  isCurrentDate: boolean;
}

const Title = styled.div<CalenderColumnProps>`
  position: relative;
  border-right: 1px solid rgb(233, 233, 231);
  border-bottom: 1px solid rgb(233, 233, 231);
  padding: 0.5rem;
  background-color: ${({ isWeekend }) =>
    isWeekend ? 'rgb(251, 251, 250)' : '#ffffff'};
  font-size: 14px;
  font-weight: 500;
`;

const Month = styled.div`
  display: grid;
  grid-template-rows: auto repeat(6, 1fr);
  grid-auto-rows: 1fr;
  border-top: 1px solid rgb(233, 233, 231);
  border-left: 1px solid rgb(233, 233, 231);
  border-radius: 2px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-columns: 1fr;
  position: relative;
`;

const Column = styled.div<CalenderColumnProps>`
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

const ColumnHeader = styled.div`
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

  color: ${({
    isCurrentYear,
    isCurrentMonth,
    isCurrentDate,
    isUserSetMonth,
  }) => {
    if (isCurrentYear && isCurrentMonth && isCurrentDate) {
      return `#ffffff`;
    }

    if (!isUserSetMonth) {
      return `rgba(55, 53, 47, 0.5)`;
    }

    return ``;
  }};

  background-color: ${({ isCurrentYear, isCurrentMonth, isCurrentDate }) =>
    isCurrentYear && isCurrentMonth && isCurrentDate ? `rgb(235, 87, 87)` : ''};

  font-size: 14px;
`;
