export const windowSmoothScroll = (scrollToTop: number, scrollToLeft: number) => (
  window.scrollTo({
    top: scrollToTop,
    left: scrollToLeft,
    behavior: 'smooth',
  })
);
