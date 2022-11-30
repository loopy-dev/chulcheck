import styled from 'styled-components';
import DEFAULT_BREAKPOINTS from '../../../themes/breakpoints';
import DEFAULT_SHADOWS from '../../../themes/shadows';
interface Props {
  left: React.ReactNode;
  middle: React.ReactNode;
  right: React.ReactNode;
}

const NavigationBar = ({ left, middle, right }: Partial<Props>) => {
  return (
    <Wrapper>
      <Container>
        <div>{left}</div>
        <div>{middle}</div>
        <div>{right}</div>
      </Container>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  position: sticky;

  z-index: 999;
  line-height: 1.4;
  box-shadow: ${DEFAULT_SHADOWS.dp2};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 16px;
  max-width: ${DEFAULT_BREAKPOINTS.lg}px;
`;
