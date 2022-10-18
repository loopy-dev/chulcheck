import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Calender } from './components/Calender';

const App = () => (
  <Routes>
    <Route element={<Calender />} path="/" />{' '}
  </Routes>
);

export default App;
