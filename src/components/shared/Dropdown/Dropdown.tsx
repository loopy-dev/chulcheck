import React, { useState } from 'react';
import styled from 'styled-components';
import useClickAway from '../../../hooks/shared/useClickAway';
import DropdownMenu from './DropdownMenu';

export type Item = {
  key: string | number;
  value: React.ReactNode;
};

interface Props<T> {
  /* trigger는 dropdown의 상태를 변화시킬 컴포넌트가 된다. */
  trigger: React.ReactNode;

  /* 아이템은 무조건 Item type으로 집어넣어야 한다. */
  items?: T[];

  /* item을 클릭하면 해당 아이템의 인덱스를 반환한다. */
  onClickItem?: (index: number) => void;
}

const Dropdown = <T extends Item>({
  trigger,
  items,
  onClickItem,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useClickAway<HTMLDivElement>(() => close());

  // 범용적인 컴포넌트를 만들기 위해서는 다양한 이벤트에 대응할 수 있어야 한다.
  const triggerWithProps = React.isValidElement(trigger)
    ? React.cloneElement(trigger, {
        ...trigger.props,
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          const event = e.nativeEvent;

          if (!event.target) return;

          const target = event.target as HTMLElement;

          // if target is INPUT, do not trigger event
          if (target.tagName === 'INPUT') return;

          toggle();
          trigger.props.onClick?.(e);
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value.trim();

          // if trimmed value is blank, close dropdown
          if (!value) {
            close();
          } else {
            open();
          }

          trigger.props.onChange?.(e);
        },
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
          // INPUT element에 대해서만 적용
          if (e.target.tagName !== 'INPUT') return;

          if (items?.length) {
            open();
          }

          trigger.props.onFocus?.(e);
        },
      })
    : trigger;

  // NOTE - Item 클릭 시 자동으로 드롭다운이 닫힘
  const onClickItemWithProps = (index: number) => {
    close();
    onClickItem?.(index);
  };

  return (
    <Container ref={ref}>
      {triggerWithProps}
      {/** Dropdown Menu 들어갈 자리 */}
      {isOpen && items?.length ? (
        <DropdownMenu items={items} onClickItem={onClickItemWithProps} />
      ) : null}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
`;
