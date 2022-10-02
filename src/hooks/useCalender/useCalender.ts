import { useCallback, useState } from 'react';
import getCalender, { getDate } from './useCalender.helper';
import type { Calender as CalenderMatrix } from './useCalender.helper';

interface Calender {
  year: number;
  month: number;
  calender: CalenderMatrix;
}

function useCalender() {
  const [calender, setCalender] = useState<Calender>(() => {
    const { year, month } = getDate(Date.now());
    return { year, month, calender: getCalender(year, month) };
  });

  const setPrevMonthCalender = useCallback(() => {
    setCalender((prev) => {
      const nextYear = prev.month > 0 ? prev.year : prev.year - 1;
      const nextMonth = (prev.month + 11) % 12;

      return {
        year: nextYear,
        month: nextMonth,
        calender: getCalender(nextYear, nextMonth),
      };
    });
  }, []);

  const setCurrentMonthCalender = useCallback(() => {
    setCalender((prev) => {
      const { year, month } = getDate(Date.now());

      if (prev.year === year && prev.month === month) return prev;

      return { year, month, calender: getCalender(year, month) };
    });
  }, []);

  const setNextMonthCalender = useCallback(() => {
    setCalender((prev) => {
      const nextYear = Math.floor((prev.month + 1) / 12) + prev.year;
      const nextMonth = (prev.month + 1) % 12;

      return {
        year: nextYear,
        month: nextMonth,
        calender: getCalender(nextYear, nextMonth),
      };
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
