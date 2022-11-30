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
  line-height: 1.4;
  padding: 16px 8px;
  border-bottom: 1px solid ${DEFAULT_COLORS.GREY_300};
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
