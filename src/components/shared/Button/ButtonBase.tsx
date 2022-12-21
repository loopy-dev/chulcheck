import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import DEFAULT_FONT_SIZES from '../../../themes/fontSizes';
import {
  get300Color,
  get500Color,
  get600Color,
  get700Color,
} from '../../../utils/colorSelector';
import type { Variant } from '../../../themes/colors';
import type { Size } from '../../../themes/fontSizes';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Size;
  fullWidth: boolean;
}

export type Props = Partial<ButtonProps>;

const Button = ({ variant, size, fullWidth, children, ...props }: Props) => {
  return (
    <ButtonBase fullWidth={fullWidth} size={size} variant={variant} {...props}>
      <Span>{children}</Span>
    </ButtonBase>
  );
};

export default Button;

const buttonRoleStyle = css<Props>`
  ${({ variant = 'default' }) => css`
    background-color: ${get500Color(variant)};
    color: ${DEFAULT_COLORS.GREY_25};

    &:hover {
      background-color: ${get600Color(variant)};
    }

    &:active {
      background-color: ${get700Color(variant)};
    }

    &:disabled {
      background-color: ${get300Color(variant)};
      pointer-events: none;
      cursor: default;
    }
  `}
`;

const sizeStyle = css<Props>`
  ${({ size = 'md' }) => {
    if (size === 'sm') {
      return css`
        padding: 8px 10px;
        font-size: ${DEFAULT_FONT_SIZES.b2}px;
      `;
    }

    if (size === 'lg') {
      return css`
        padding: 14px 18px;
        font-size: ${DEFAULT_FONT_SIZES.b2}px;
      `;
    }

    if (size === 'xl') {
      return css`
        padding: 14px 18px;
        font-size: ${DEFAULT_FONT_SIZES.b1}px;
      `;
    }

    // default styles
    return css`
      padding: 10px 12px;
      font-size: ${DEFAULT_FONT_SIZES}px;
    `;
  }}
`;

const blockStyle = css<Props>`
  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }
    return css``;
  }}
`;

const ButtonBase = styled.button<Props>`
  display: inline-flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  position: relative;
  min-width: 64px;
  max-width: 100%;
  border: none;
  border-radius: 6px;
  padding: 10px 12px;
  cursor: pointer;

  user-select: none;

  transition: background-color 0.1s ease;

  /**block style */
  ${blockStyle}

  /**background-color style */
  ${buttonRoleStyle}

  /**size style */
  ${sizeStyle}
`;

const Span = styled.span`
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;
