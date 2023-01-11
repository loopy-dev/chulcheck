import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';
import type { Item } from './Dropdown';

describe('Dropdown Test', () => {
  const items: Item[] = [
    { key: '1', value: 'DropdownItem1' },
    { key: '2', value: 'DropdownItem2' },
    { key: '3', value: 'DropdownItem3' },
    { key: '4', value: 'DropdownItem4' },
  ];

  // render test
  test('initially render nothing', () => {
    const trigger = <button>trigger</button>;
    render(<Dropdown items={items} trigger={trigger} />);

    // element 자체가 존재하지 않아야 한다.
    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).toBeNull()
    );
  });

  test('render nothing if no item the items', () => {
    const trigger = <button>trigger</button>;
    render(<Dropdown trigger={trigger} />);

    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).toBeNull()
    );
  });

  // when click trigger(Button), render DropdownItem
  test('render items if click trigger(Button)', () => {
    const clickEvent = jest.fn();
    const trigger = <button>trigger</button>;

    render(<Dropdown items={items} trigger={trigger} />);

    const button = screen.getByRole('button');

    fireEvent.click(button, clickEvent);

    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).not.toBeNull()
    );

    fireEvent.click(button, clickEvent);

    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).toBeNull()
    );
  });

  // when type something in the input, render DropdownItem
  test('render items when something changed in the input', () => {
    const trigger = <input placeholder="write something" />;

    render(
      <Dropdown items={items} trigger={trigger} onClickItem={() => jest.fn()} />
    );

    const input = screen.getByPlaceholderText('write something');

    fireEvent.change(input, {
      target: { value: 'input' },
    });

    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).not.toBeNull()
    );

    fireEvent.change(input, {
      target: { value: ' ' },
    });

    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).toBeNull()
    );
  });

  // when click item, dropdown expect to be closed
  test('when click DropdownItem, Dropdown expect to be closed', () => {
    const trigger = <button>trigger</button>;

    render(<Dropdown items={items} trigger={trigger} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const dropdownItem = screen.getByText(items[0].value as string);

    fireEvent.click(dropdownItem);

    items.forEach((item) =>
      expect(screen.queryByText(item.value as string)).toBeNull()
    );
  });
});
