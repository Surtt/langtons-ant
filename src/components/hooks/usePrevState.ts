import { useEffect, useRef } from 'react';

type GetPrevState<T = undefined> = (value: T) => T;

export const usePrevState: GetPrevState = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
