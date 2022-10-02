import { useState } from 'react';
import useCalender, { getDate } from '../../hooks/useCalender';

const Calender = () => {
  const [date, setDate] = useState(() => getDate(Date.now()));
  const { calender, fillCalender } = useCalender(date.year, date.month);
  return <div />;
};

export default Calender;
