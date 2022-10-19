import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Calender } from './components/Calender';
import SigninPage from './pages/SigninPage';

const App = () => (
  <Routes>
    <Route element={<Calender />} path="/" />
    <Route element={<SigninPage />} path="/signin" />
  </Routes>
);

export default App;
