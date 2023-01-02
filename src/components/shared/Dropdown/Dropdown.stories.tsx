import Dropdown from './Dropdown';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Dropdown',
} as ComponentMeta<typeof Dropdown>;

type Item = {
  key: string | number;
  value: React.ReactNode;
};

const items: Item[] = [
  { key: '1', value: 'value1' },
  { key: '2', value: 'value2' },
  { key: '3', value: 'value3' },
  {
    key: '4',
    value:
      'longtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtext',
  },
];

export const Default: ComponentStory<typeof Dropdown> = () => {
  return (
    <Dropdown
      items={items}
      trigger={<input />}
      onClickItem={(index) => {
        console.log(index);
      }}
    />
  );
};

export const ButtonTrigger: ComponentStory<typeof Dropdown> = () => {
  return (
    <div style={{ width: '200px' }}>
      click outside
      <Dropdown items={items} trigger={<button>trigger</button>} />
    </div>
  );
};
