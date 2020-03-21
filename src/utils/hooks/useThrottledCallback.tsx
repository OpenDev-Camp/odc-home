import * as React from 'react';
import { useOnUnmount } from './useOnUnmount';

export type Callback<T extends any[]> = (...args: T) => void;

export function useThrottledCallback
<T extends any[]>(callback: Callback<T>, timeout = 150) {
  const timer = React.useRef<number | undefined>();

  useOnUnmount(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
  });

  return React.useCallback<Callback<T>>((...args: T) => {
    if (!timer.current) {
      callback(...args);

      timer.current = window.setTimeout(() => {
        timer.current = undefined;
      }, timeout);
    }
  }, [callback, timeout]);
}
