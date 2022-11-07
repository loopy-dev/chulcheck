import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

const Router = () => (
  <Routes>
    <Route element={<NotFoundPage />} path="*" />
    <Route element={<MainPage />} path="/" />
    <Route element={<SigninPage />} path="/signin" />
    <Route element={<SignupPage />} path="/signup" />
  </Routes>
);

export default Router;
