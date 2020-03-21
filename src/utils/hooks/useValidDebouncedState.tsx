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
import { useDebouncedState } from './useDebouncedState';
import { useConstantCallback } from './useConstantCallback';

type StateSupplier<T> = T | (() => T);
type StateValidator<T> = (state: T) => boolean;
type StateTuple<T> = [T, boolean, React.Dispatch<React.SetStateAction<T>>];

function isCallable<T>(initial: StateSupplier<T>): initial is () => T {
  return typeof initial === 'function';
}
function isCallableState<T>(initial: React.SetStateAction<T>): initial is (prev: T) => T {
  return typeof initial === 'function';
}

export function useValidDebouncedState<T>(
  initialState: StateSupplier<T>,
  validator: StateValidator<T>,
  timeout = 150,
): StateTuple<T> {
  const [state, setState] = useDebouncedState(initialState, timeout);
  const invalid = React.useRef(
    validator(isCallable(initialState) ? initialState() : initialState),
  );

  const dispatch = useConstantCallback<React.Dispatch<React.SetStateAction<T>>>((value) => {
    setState((current) => {
      const newValue = isCallableState<T>(value) ? value(current) : value;
      invalid.current = validator(newValue);
      return newValue;
    });
  });

  return [state, invalid.current, dispatch];
}
