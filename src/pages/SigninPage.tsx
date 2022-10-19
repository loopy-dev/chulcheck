import type React from 'react';
import { useState } from 'react';
import { signin } from '../api/auth';
import AuthFormTemplate from '../components/AuthFormTemplate';
import { LoadingButton } from '../components/shared/Button';
import Input from '../components/shared/Input';

const SigninPage = () => {
  // signin logic goes here
  const [data, setData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    id: '',
    password: '',
    result: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await signin(data.username, data.password);
      // TODO - 전역상태 및 localstorage에 token 정보 저장하기
      // TODO - console 지우기
      // TODO - 비제어 컴포넌트 적용하기
      console.log('login success');
    } catch {
      setLoading(false);
      // TODO - go error in catch block
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthFormTemplate
      title="로그인"
      controls={
        <>
          <Input
            disabled={loading}
            name="username"
            placeholder="username"
            value={data.username}
            variant="primary"
            onChange={handleChange}
          />
          <Input
            disabled={loading}
            name="password"
            placeholder="password"
            type="password"
            value={data.password}
            variant="primary"
            onChange={handleChange}
          />
        </>
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
      onSubmit={handleSubmit}
    />
  );
};

export default SigninPage;
