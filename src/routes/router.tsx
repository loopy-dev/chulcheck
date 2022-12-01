import { Routes, Route } from 'react-router-dom';
import GroupCreatePage from '../pages/GroupCreatePage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import Protected from './Protected';

const Router = () => (
  <Routes>
    <Route element={<NotFoundPage />} path="*" />
    <Route
      path="/"
      element={
        <Protected>
          <MainPage />
        </Protected>
      }
    />
    <Route element={<SigninPage />} path="/signin" />
    <Route element={<SignupPage />} path="/signup" />
    <Route
      path="/groups/create"
      element={
        <Protected>
          <GroupCreatePage />
        </Protected>
      }
    />
  </Routes>
);

export default Router;
