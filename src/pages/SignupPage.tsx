import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import AuthFormTemplate from '../components/AuthFormTemplate';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import { LoadingButton } from '../components/shared/Button';
import Input from '../components/shared/Input';
import useForm from '../hooks/shared/useForm';

const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data, handleChange, handleSubmit } = useForm({
    initialState: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
    validate: (value) => {
      const errors = {
        username: '',
        password: '',
      };

      if (value.username.length < 8) {
        errors.username = 'username은 8글자 이상이어야 합니다.';
      }

      if (value.password.length < 6) {
        errors.password = 'password는 6글자 이상이어야 합니다.';
        return errors;
      }

      if (value.password !== value.passwordConfirm) {
        errors.password = 'password와 passwordConfirm이 다릅니다.';
      }

      return errors;
    },
    onSubmit: async () => {
      try {
        setLoading(true);
        await signup(data.username, data.password);
        console.log('success');
        navigate('/signin', { replace: true });
      } catch {
        setLoading(false);
      }
    },
  });
  return (
    <AuthFormLayout>
      <AuthFormTemplate
        title="회원 가입"
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
            <Input
              disabled={loading}
              name="passwordConfirm"
              placeholder="password confirm"
              type="password"
              value={data.passwordConfirm}
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
    </AuthFormLayout>
  );
};

export default SignupPage;
