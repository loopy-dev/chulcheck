import { useEffect, useRef } from 'react';

const events = ['mousedown', 'touchstart'] as const;

type UseClickAwayEvent = MouseEvent | TouchEvent;

function useClickAway<T extends HTMLElement>(
  callback: (e: UseClickAwayEvent) => void
) {
  const domRef = useRef<T | null>(null);

  useEffect(() => {
    const handler = (e: UseClickAwayEvent) => {
      const { current } = domRef;

      if (!current) return;
      if (!current.contains(e.target as unknown as HTMLElement)) callback(e);
    };

    events.forEach((event) => {
      document.addEventListener(event, handler);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, callback);
      });
    };
  }, [callback]);

  return domRef;
}

export default useClickAway;
