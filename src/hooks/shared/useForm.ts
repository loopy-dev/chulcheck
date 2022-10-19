import type React from 'react';
import { useCallback, useState } from 'react';

type ObjectState = {
  [key: string | number | symbol]: unknown;
};

interface Props<T extends ObjectState> {
  initialState: T;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  validate?: (initialState: T) => Partial<T>;
}

function useForm<T extends ObjectState>({
  initialState,
  onSubmit,
  validate,
}: Props<T>) {
  const [data, setData] = useState(initialState);
  const [touched, setTouched] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Partial<T>>({});

  /**
   * @description
   * input의 change event가 발생할 때 실행될 함수입니다.
   * handleChange 함수를 사용하기 위해서는 input 컴포넌트에 name 속성이 비어있으면 안됩니다.
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  /**
   * @description
   * input의 blur event가 발생할 때 실행될 함수입니다.
   * handleBlur 함수를 사용하기 위해서는 input 컴포넌트에 name 속성이 비어있으면 안됩니다.
   */
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }, []);

  /**
   * @description
   * form에 submit event가 발생될 때 실행될 함수입니다.
   * error 객체에 값이 존재한다면, submit 이벤트가 발생하지 않습니다.
   */
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setTouched(
        Object.keys(data).reduce(
          (acc, cur) => ({ ...acc, [cur]: true }),
          {} as Partial<T>,
        ),
      );

      const validationErrors = validate?.(data) || {};

      if (Object.values(validationErrors).some((value) => value)) {
        setErrors(validationErrors);
        return;
      }

      onSubmit(e);
    },
    [data, onSubmit, validate],
  );

  return { data, touched, errors, handleChange, handleBlur, handleSubmit };
}

export default useForm;
