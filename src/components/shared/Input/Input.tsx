import type { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import { getLighterColor, getDarkerColor } from './Input.helper';
import type { Variant } from './Input.helper';

interface VariantProps {
  variant?: Variant;
  disabled?: boolean;
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, VariantProps {}

const Input = ({ variant, ...props }: Props) => (
  <Wrapper disabled={props.disabled} variant={variant}>
    <StyledInput {...props} />
  </Wrapper>
);

export default Input;

const borderStyle = css<VariantProps>`
  ${({ variant }) => css`
    border: 1px solid ${getLighterColor(variant)};
  `}
`;

const hoverAndFocusColorStyle = css<VariantProps>`
  ${({ variant }) => css`
    border: 1px solid ${getDarkerColor(variant)};
  `}
`;

const backgroundColorStyle = css<VariantProps>`
  ${({ disabled }) => {
    const color = !disabled ? DEFAULT_COLORS.white : DEFAULT_COLORS.gray_100;
    return css`
      border-color: ${DEFAULT_COLORS.gray_400};
      background-color: ${color};
    `;
  }}
`;

const Wrapper = styled.div<VariantProps>`
  position: relative;
  /** TODO: size 별로 나누어서 진행하기 */
  padding: 9px 10px;
  border-radius: 6px;

  /** border-color style */
  ${borderStyle}

  /** background-color style */
  ${backgroundColorStyle}

  &:hover {
    ${hoverAndFocusColorStyle};
  }

  transition: border-color 0.2s;
`;

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  border: none;
  outline: none;
  text-overflow: ellipsis;
  background-color: transparent;

  &:disabled {
    background-color: transparent;
  }
`;
