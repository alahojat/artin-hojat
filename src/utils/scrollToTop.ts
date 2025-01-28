export const scrollToTop = (behavior: ScrollBehavior = "auto") => {
  window.scroll({
    top: 0,
    left: 0,
    behavior,
  });
};
