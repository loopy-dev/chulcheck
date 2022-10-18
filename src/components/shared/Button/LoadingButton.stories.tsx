import Button from './LoadingButton';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/LoadingButton',
  component: Button,
  args: {
    loading: false,
    fullWidth: false,
    variant: 'default',
  },
  argTypes: {
    loading: {
      name: 'loading',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'loading condition',
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'variant color',
      control: 'radio',
      options: ['default', 'primary', 'success', 'warning', 'error'],
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'size',
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
