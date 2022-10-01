import { useCallback, useState } from 'react';
import getCalender from './useCalender.helper';
import type { CalenderBlock } from './useCalender.helper';

function useCalender(initialYear: number, initialMonth: number) {
  const [calender, setCalender] = useState<CalenderBlock[][]>(() =>
    getCalender(initialYear, initialMonth)
  );

  const fillCalender = useCallback((year: number, month: number) => {
    const calenderOfCurrentMonth = getCalender(year, month);
    setCalender(calenderOfCurrentMonth);
  }, []);

  return { calender, fillCalender };
}

export default useCalender;
