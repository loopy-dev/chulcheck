import Spinner from './Spinner';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 20,
    },
  },
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);
