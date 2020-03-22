/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Prince Neil Cedrick Castro
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
 * @author Prince Neil Cedrick Castro <cedi.castro@gmail.com>
 * @copyright Prince Neil Cedrick Castro 2020
 */

import * as React from 'react';

import { useIsomorphicEffect } from './useIsomorphicEffect';
import { useDebouncedState } from './useDebouncedState';

// eslint-disable-next-line max-len
export const useScrollPosition = (scrollYThreshold = window.innerHeight, scrollXThreshold = window.innerWidth, initialYScrollPosition = 0, initialXScrollPosition = 0) => {
  // Initial setup for scroll position, with debounced setState
  const [horizontalScroll, setHorizontalScroll] = useDebouncedState(initialXScrollPosition, 150);
  const [verticalScroll, setVeriticalScroll] = useDebouncedState(initialYScrollPosition, 150);

  // Monitors scroll position change
  useIsomorphicEffect(() => {
    // On mount
    setHorizontalScroll(window.scrollX);
    setVeriticalScroll(window.scrollY);

    // Handling scroll updates.
    const handler = () => {
      setHorizontalScroll(window.scrollX);
      setVeriticalScroll(window.scrollY);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  const scrolledY = React.useMemo(() => (
    verticalScroll > scrollYThreshold
  ), [verticalScroll, scrollYThreshold]);

  const scrolledX = React.useMemo(() => (
    horizontalScroll > scrollXThreshold
  ), [horizontalScroll, scrollXThreshold]);

  return {
    horizontalScroll, verticalScroll, scrolledY, scrolledX,
  };
};