import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import Spinner from '../Spinner';
import ButtonBase from './ButtonBase';
import type { Props as ButtonBaseProps } from './ButtonBase';

interface Props extends ButtonBaseProps {
  isLoading?: boolean;
}

type LoadingProps = Pick<Props, 'isLoading'>;

const Button = ({ isLoading = false, children, size, ...props }: Props) => (
  <LoadingButton disabled={isLoading} size={size} {...props}>
    <Wrapper isLoading={isLoading}>
      <Spinner size={size === 'xl' ? 16 : 14} />
    </Wrapper>
    {children}
  </LoadingButton>
);

export default Button;

const buttonLoadingStyle = css<Props>`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: ${DEFAULT_COLORS.TRANSPARENT};
      `;
    }
    return css``;
  }}
`;

/**
 * visibility: hidden when loading
 */
const LoadingButton = styled(ButtonBase)`
  ${buttonLoadingStyle}
`;

/**
 * position: absolute
 * left: 50%;
 * visibility: visible when loading
 */
const Wrapper = styled.span<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  visibility: ${({ isLoading = false }) => (isLoading ? 'visible' : 'hidden')};
`;
