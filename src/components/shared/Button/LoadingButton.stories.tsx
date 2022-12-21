import Button from './LoadingButton';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/LoadingButton',
  component: Button,
  args: {
    isLoading: false,
    fullWidth: false,
    variant: 'default',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
