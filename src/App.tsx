import { useState } from 'react';
import './App.css';
import { CalenderInner } from './components/Calender';
import useCalender from './hooks/useCalender';

const App = () => {
  const [date, setDate] = useState(() => {
    const today = new Date(Date.now());
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate(),
    };
  });

  const { calender, fillCalender } = useCalender(date.year, date.month);

  return (
    <div className="App">
      <CalenderInner calender={calender} />
    </div>
  );
};

export default App;
