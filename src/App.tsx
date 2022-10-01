import { useState } from 'react';
import './App.css';
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
      {calender.map((row, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx} style={{ display: 'flex' }}>
          {row.map((el) => (
            <div
              key={`${el.year}${el.month}${el.date}`}
              style={{ border: '1px solid', width: 100, height: 100 }}
            >
              {el.month + 1}월 {el.date}일
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
