import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import Spinner from '../Spinner';
import ButtonBase from './ButtonBase';
import type { Props as ButtonBaseProps } from './ButtonBase';

interface Props extends ButtonBaseProps {
  isLoading?: boolean;
}

type LoadingProps = Pick<Props, 'isLoading'>;

const Button = ({
  isLoading = false,
  disabled,
  children,
  size,
  ...props
}: Props) => (
  <LoadingButton
    disabled={isLoading || disabled}
    isLoading={isLoading}
    size={size}
    {...props}
  >
    <Wrapper isLoading={isLoading}>
      <Spinner size={size === 'xl' ? 18 : 16} />
    </Wrapper>
    {children}
  </LoadingButton>
);

export default Button;

const buttonLoadingStyle = css<Props>`
  ${({ isLoading }) => {
    if (isLoading) {
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
  left: 50%;
  transform: translate(-50%);
  visibility: ${({ isLoading = false }) => (isLoading ? 'visible' : 'hidden')};
`;
