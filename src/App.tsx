import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Calender } from './components/Calender';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const App = () => (
  <Routes>
    <Route element={<Calender />} path="/" />
    <Route element={<SigninPage />} path="/signin" />
    <Route element={<SignupPage />} path="/signup" />
  </Routes>
);

export default App;
