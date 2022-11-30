import styled from 'styled-components';
import DEFAULT_COLORS from '../../themes/colors';

interface Props {
  left: React.ReactNode;
  middle: React.ReactNode;
  right: React.ReactNode;
}

const NavigationBar = ({ left, middle, right }: Partial<Props>) => {
  return (
    <Wrapper>
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid ${DEFAULT_COLORS.GREY_300};
  z-index: 999;
  line-height: 1.4;
`;
