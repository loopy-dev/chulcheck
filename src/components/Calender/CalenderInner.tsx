import styled from 'styled-components';
import DataCell from '../CalenderData/DataCell';
import ColumnHeader from './ColumnHeader';
import type { Attendance } from '../../api/attendance';
import type Calender from '../../factory/Calender/Caldender';
import type { CellClickEventHandler } from './Calender';

interface Props {
  calender: Calender;
  onClickItem?: CellClickEventHandler;
  items: Attendance[];
}

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const CalenderInner = ({ calender, onClickItem, items }: Props) => (
  <GridContainer>
    <Row>
      {days.map((day, index) => (
        <Title key={day} isWeekend={index === 0 || index === 6}>
          {day}
        </Title>
      ))}
    </Row>
    <Container>
      {calender.calender.map(({ id, week }) => (
        <Row key={id}>
          {week.map((day, index) => (
            <Cell
              key={day.id}
              isWeekend={index === 0 || index === 6}
              onClick={() => {
                onClickItem?.(`${day.year}-${day.month + 1}-${day.date}`);
              }}
            >
              <ColumnHeader
                calenderMonth={calender.month}
                date={day.date}
                month={day.month}
                year={day.year}
              />
              <DataCell dateData={day} items={items} />
            </Cell>
          ))}
          {/** TODO: 여기에 데이터 들어가야 함, props으로 data 전달 받아서 표현할 것 */}
          {/* <CalenderData key={`data-${id}`} /> */}
        </Row>
      ))}
    </Container>
  </GridContainer>
);

export default CalenderInner;

interface CalenderColumnProps {
  isWeekend: boolean;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto repeat(6, minmax(100px, max-content));
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

const Cell = styled.div<CalenderColumnProps>`
  position: relative;
  min-height: 100px;
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

const Container = styled.div`
  position: relative;
`;
