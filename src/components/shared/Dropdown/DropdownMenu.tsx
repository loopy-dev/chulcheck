import styled from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import DropdownItem from './DropdownItem';

type Item = {
  key: number | string;
  value: React.ReactNode;
};

interface Props<T> {
  items: T[];
  onClickItem: (index: number) => void;
}

// TODO - max height 설정 필요
const DropdownMenu = <T extends Item>({
  items,
  onClickItem,
}: Partial<Props<T>>) => {
  return (
    <Container>
      {items?.map(({ key, value }, index) => {
        return (
          <DropdownItem
            key={key}
            onClick={() => {
              onClickItem?.(index);
            }}
          >
            {value}
          </DropdownItem>
        );
      })}
    </Container>
  );
};

export default DropdownMenu;

const Container = styled.ul`
  position: absolute;
  margin-top: 16px;
  padding: 16px 0;
  width: 100%;
  border: 1px solid ${DEFAULT_COLORS.GREY_300};
  border-radius: 8px;
  background-color: ${DEFAULT_COLORS.WHITE};
  z-index: 9;
`;
