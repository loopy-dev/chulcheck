import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import ArrowDown from './ArrowDown';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
/**
 * @description
 * Dropdown의 trigger로서 활용될 수 있는 Select Component입니다.
 * NOTE - 현재 SVG import error로 storybook 설정 불가
 * TODO - 추후 Button 컴포넌트와 통합 예정
 */
const Select = ({ title, disabled, onClick, ...props }: Props) => {
  return (
    <Wrapper
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
      }}
      {...props}
    >
      {title}
      <ArrowDown />
    </Wrapper>
  );
};

export default Select;

type WrapperProps = Pick<Props, 'disabled'>;

const activationStyle = css<WrapperProps>`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: ${DEFAULT_COLORS.GREY_400};
        cursor: default;
      `;
    }
    return css`
      &:hover {
        background-color: ${DEFAULT_COLORS.GREY_100};
      }
    `;
  }}
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.2;
  cursor: pointer;
  padding: 10px 12px;
  border: 2px solid ${DEFAULT_COLORS.GREY_200};
  border-radius: 6px;
  background-color: ${DEFAULT_COLORS.GREY_50};
  transition: background-color 0.1s ease;
  font-size: 14px;
  overflow-x: hidden;
  text-overflow: ellipsis;

  /* activation style */
  ${activationStyle}
`;
