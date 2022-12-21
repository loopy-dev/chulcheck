import Button from './ButtonBase';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    variant: 'primary',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const LongText: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: '300px', border: '1px solid' }}>
    <Button {...args}>
      longtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtext
    </Button>
  </div>
);
