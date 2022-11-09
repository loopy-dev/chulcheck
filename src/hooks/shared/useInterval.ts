import { useEffect, useRef } from 'react';

type IntervalCallback = () => void;

function useInterval(callback: IntervalCallback, delay?: number) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const callbackRef = useRef<IntervalCallback>(callback);

  useEffect(() => {
    // delay를 설정하지 않았다면, 아무 동작도 실행하지 않는다.
    if (typeof delay === 'undefined') {
      return () => {
        return;
      };
    }

    const tick = () => {
      callbackRef.current();
    };

    intervalRef.current = setInterval(tick, delay);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, [delay]);
}

export default useInterval;
