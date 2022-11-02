import { useState, useEffect, useRef } from 'react';

function useFetch<Data = unknown, Error = unknown>(
  queryFn: () => Promise<Data>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | null>(null);

  // NOTE - 현재 이 부분을 제거하면 무한 요청이 발생함
  const ref = useRef(queryFn);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await ref.current();

        setData(response);
      } catch (serverError) {
        setError(serverError as Error);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
