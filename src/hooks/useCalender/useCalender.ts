import { useCallback, useState } from 'react';
import Calender from '../../factory/Calender/Caldender';
import getDate from './useCalender.helper';

function useCalender() {
  const [calender, setCalender] = useState<Calender>(() => {
    const { year, month } = getDate(Date.now());
    return new Calender(year, month);
  });

  const setPrevMonthCalender = useCallback(() => {
    setCalender((prev) => {
      const nextYear = prev.month > 0 ? prev.year : prev.year - 1;
      const nextMonth = (prev.month + 11) % 12;

      return new Calender(nextYear, nextMonth);
    });
  }, []);

  const setCurrentMonthCalender = useCallback(() => {
    setCalender((prev) => {
      const { year, month } = getDate(Date.now());

      if (prev.year === year && prev.month === month) return prev;

      return new Calender(year, month);
    });
  }, []);

  const setNextMonthCalender = useCallback(() => {
    setCalender((prev) => {
      const nextYear = Math.floor((prev.month + 1) / 12) + prev.year;
      const nextMonth = (prev.month + 1) % 12;

      return new Calender(nextYear, nextMonth);
    });
  }, []);

  return {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  };
}

export default useCalender;
