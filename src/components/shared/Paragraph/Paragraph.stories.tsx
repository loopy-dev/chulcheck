import Paragraph from './Paragraph';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Paragrph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Default: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args}>Paragraph</Paragraph>
);

export const LongText: ComponentStory<typeof Paragraph> = (args) => (
  <div style={{ width: '100px' }}>
    <Paragraph {...args}>
      longtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtextlongtext
    </Paragraph>
  </div>
);

export const LongTextWordBreak: ComponentStory<typeof Paragraph> = (args) => (
  <div style={{ width: '100px' }}>
    <Paragraph {...args}>
      longtext longtext longtext longtext longtext longtext longtext longtext
      longtext longtext longtext longtext longtext longtext longtext longtext
      longtext longtext longtext longtext longtext longtext longtext longtext
    </Paragraph>
  </div>
);
