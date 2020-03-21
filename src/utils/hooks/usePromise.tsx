/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
import * as React from 'react';
import { useIsomorphicEffect } from './useIsomorphicEffect';

export type PromiseWrapper = <T>(promise: Promise<T>) => Promise<T>;

interface PromiseHalt {
  flag: boolean;
}

export function usePromise(deps?: React.DependencyList): PromiseWrapper {
  const ref = React.useRef<PromiseHalt>({
    flag: false,
  });

  useIsomorphicEffect(() => {
    const current = {
      flag: true,
    };

    ref.current = current;

    return () => {
      current.flag = false;
    };
  }, deps);

  const currentDeps: React.DependencyList = deps || [{}];

  return React.useCallback((promise: Promise<any>) => new Promise((resolve, reject) => {
    const { current } = ref;
    promise.then(
      (value) => current.flag && resolve(value),
      (error) => current.flag && reject(error),
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), currentDeps);
}
