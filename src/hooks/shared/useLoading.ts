import { useCallback, useState } from 'react';

function useLoading(): [boolean, <T>(promise: Promise<T>) => Promise<T>] {
  const [loading, setLoading] = useState(false);

  const startTransition = useCallback(async <T>(promise: Promise<T>) => {
    try {
      setLoading(true);
      const data = await promise;
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, startTransition];
}

export default useLoading;
