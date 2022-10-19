import Input from './Input';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    disabled: false,
  },
  argTypes: {
    placeholder: {
      defaultValue: 'placeholder',
    },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const File: ComponentStory<typeof Input> = (args) => (
  <Input {...args} type="file" />
);

export const Number: ComponentStory<typeof Input> = (args) => (
  <Input {...args} type="number" />
);
