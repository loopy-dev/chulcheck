import styled, { keyframes } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';

interface Props {
  size?: number;
}

const spinnerKeyframes = keyframes`
  from {
    transfrom: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span<Props>`
  display: inline-block;
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  border: 3px solid ${DEFAULT_COLORS.gray_100};
  border-radius: 50%;
  border-top: 3px solid ${DEFAULT_COLORS.gray_200};

  animation: ${spinnerKeyframes} 1s linear infinite;
`;

export default Spinner;
