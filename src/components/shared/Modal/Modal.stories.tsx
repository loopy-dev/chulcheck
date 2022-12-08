import Modal from './Modal';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>Modal</Modal>
);
