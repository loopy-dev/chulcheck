import styled from 'styled-components';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}

const MainPageLayout = ({ left, right }: Props) => {
  return (
    <Container>
      <Left>{left}</Left>
      <Right>{right}</Right>
    </Container>
  );
};

export default MainPageLayout;

const Container = styled.div`
  display: flex;
  gap: 32px;
  margin: 32px 0;

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    display: block;
  }
`;

const Left = styled.div`
  width: 70%;

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 30%;

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    width: 100%;
    margin: 16px 0;
  }
`;
