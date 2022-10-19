import { useState } from 'react';
import { LoadingButton } from '../shared/Button';
import Input from '../shared/Input';
import AuthFormTemplate from './AuthFormTemplate';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/AuthFormTemplate',
  component: AuthFormTemplate,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      defaultValue: '로그인',
      description: 'header title for AuthFormTemplate',
    },
  },
} as ComponentMeta<typeof AuthFormTemplate>;

export const Default: ComponentStory<typeof AuthFormTemplate> = (args) => {
  const [loading, setLoading] = useState(false);
  return (
    <AuthFormTemplate
      {...args}
      controls={
        <>
          <Input placeholder="username" type="text" variant="primary" />
          <Input placeholder="password" type="password" variant="primary" />
        </>
      }
      footer={
        <ul>
          <li>비밀번호를 잊으셨나요?</li>
          <li>추가적으로 조치할 사항</li>
        </ul>
      }
      trigger={
        <LoadingButton
          fullWidth
          isLoading={loading}
          size="lg"
          type="submit"
          variant="primary"
        >
          Signin
        </LoadingButton>
      }
      onSubmit={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log('submit');
        setLoading(true);
      }}
    />
  );
};
