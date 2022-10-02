import styled from 'styled-components';
import { formatMonthDate } from '../../utils/dateFormat';
import type { Calender } from '../../hooks/useCalender/useCalender.helper';

interface Props {
  calender: Calender;
}

const CalenderInner = ({ calender }: Props) => (
  <div className="calender">
    {Object.entries(calender).map(([key, row]) => (
      <CalenderRow key={key}>
        {row.map((el) => (
          <CalenderColumn key={`${el.year}${el.month}${el.date}`}>
            {formatMonthDate(el.month, el.date)}
          </CalenderColumn>
        ))}
      </CalenderRow>
    ))}
  </div>
);

export default CalenderInner;

const CalenderRow = styled.div`
  display: flex;
`;

const CalenderColumn = styled.div`
  border: 1px solid;
  width: 100px;
  height: 100px;
`;
