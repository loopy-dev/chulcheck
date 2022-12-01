import type { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import { get400Color, get500Color } from '../../../utils/colorSelector';
import type { Variant } from '../../../themes/colors';

interface VariantProps {
  variant?: Variant;
  disabled?: boolean;
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, VariantProps {
  label?: string;
}

const Input = ({ variant, label, ...props }: Props) =>
  label ? (
    <Container>
      <LabelWrapper>{label}</LabelWrapper>
      <InputBase variant={variant} {...props} />
    </Container>
  ) : (
    <InputBase variant={variant} {...props} />
  );

const InputBase = ({ variant, ...props }: Props) => {
  return (
    <Wrapper disabled={props.disabled} variant={variant}>
      <StyledInput {...props} />
    </Wrapper>
  );
};
export default Input;

const Container = styled.div`
  line-height: 1.2;
`;

const LabelWrapper = styled.div`
  padding-bottom: 8px;
`;

const borderStyle = css<VariantProps>`
  ${({ variant }) => css`
    border: 1px solid ${get400Color(variant)};
  `}
`;

const hoverAndFocusColorStyle = css<VariantProps>`
  ${({ variant }) => css`
    border: 1px solid ${get500Color(variant)};
  `}
`;

const backgroundColorStyle = css<VariantProps>`
  ${({ disabled }) => {
    const color = !disabled ? DEFAULT_COLORS.WHITE : DEFAULT_COLORS.GREY_100;
    return css`
      border-color: ${DEFAULT_COLORS.GREY_400};
      background-color: ${color};
    `;
  }}
`;

const Wrapper = styled.div<VariantProps>`
  position: relative;
  /** TODO: size 별로 나누어서 진행하기 */
  padding: 8px 10px;
  border-radius: 6px;
  width: 100%;

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
  line-height: 1.2;

  &:disabled {
    background-color: transparent;
    user-select: none;
  }
`;
