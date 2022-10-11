import styled from 'styled-components';
import useCalender from '../../hooks/useCalender';
import useCalenderData from '../../hooks/useCalenderData';
import { formatYearMonth } from '../../utils/dateFormat';
import CalenderHeader from './CalenderHeader';
import CalenderInner from './CalenderInner';

interface Props {
  onClickItem?: React.MouseEventHandler<HTMLDivElement>;
}

const Calender = ({ onClickItem }: Props) => {
  const {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  } = useCalender();
  const items = useCalenderData();

  return (
    <Container>
      <CalenderHeader
        title={formatYearMonth(calender.year, calender.month)}
        onCurrent={setCurrentMonthCalender}
        onNext={setNextMonthCalender}
        onPrev={setPrevMonthCalender}
      />
      <CalenderInner
        calender={calender}
        items={items}
        onClickItem={onClickItem}
      />
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
