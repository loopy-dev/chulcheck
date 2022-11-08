import { useState } from 'react';
import useInterval from '../shared/useInterval';

/**
 * @description
 * useInterval 기반의 timer입니다.
 * 1초에 한번씩 새로운 초가 갱신됩니다.
 * TODO - 가장 간단한 형태의 타이머를 구현한 뒤 고도화 할 것
 */
function useTimer() {
  const [time, setTime] = useState(() => Date.now());

  useInterval(() => {
    const now = Date.now();
    setTime(now);
  }, 1000);

  return time;
}

export default useTimer;
