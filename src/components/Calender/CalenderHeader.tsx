import styled from 'styled-components';

type CalenderControllerCallback = () => void;

interface Props {
  title: string;
  onPrev: CalenderControllerCallback;
  onCurrent: CalenderControllerCallback;
  onNext: CalenderControllerCallback;
}

const CalenderHeader = ({ title, onPrev, onCurrent, onNext }: Props) => (
  <Container>
    <CalenderHeaderTitle>{title}</CalenderHeaderTitle>
    <CalenderController>
      <CalenderPrevButton type="button" onClick={onPrev} />
      <CalenderCurrentButton type="button" onClick={onCurrent} />
      <CalenderNextButton type="button" onClick={onNext} />
    </CalenderController>
  </Container>
);

export default CalenderHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const CalenderHeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
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
