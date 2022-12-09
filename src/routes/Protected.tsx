import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Storage from '../utils/storage';

const storage = new Storage();

interface Props {
  children: JSX.Element;
}

/**
 * @description
 * PrivateRoute는 로그인 여부를 판단하여, 로그인하지 않았다면 login page로 이동,
 * 로그인했다면 기존 페이지로 이동합니다.
 */
const Protected = ({ children }: Props) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const value = storage.getItem<string>('token', '');

    if (!value) {
      navigate('/signin');
    }
  }, [navigate]);

  return children;
};

export default Protected;
