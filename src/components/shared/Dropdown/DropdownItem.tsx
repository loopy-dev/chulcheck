import React from 'react';
import styled from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';

interface Props {
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  children: React.ReactNode;
}

const DropdownItem = ({ onClick, children }: Partial<Props>) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default DropdownItem;

const Wrapper = styled.li`
  padding: 12px 8px;
  max-height: 256px;
  border-bottom: 1px solid ${DEFAULT_COLORS.GREY_300};
  font-size: 14px;
  line-height: 1.2;
  overflow-x: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:first-of-type {
    border-top: 1px solid ${DEFAULT_COLORS.GREY_300};
  }

  &:hover {
    background-color: ${DEFAULT_COLORS.GREY_100};
  }
`;
