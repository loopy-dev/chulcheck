import Button from './LoadingButton';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/LoadingButton',
  component: Button,
  args: {
    loading: false,
    fullWidth: false,
    size: 'md',
    variant: 'default',
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
