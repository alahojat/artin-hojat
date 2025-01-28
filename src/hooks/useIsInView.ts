import { useState, useCallback } from "react";

export const useIsInView = (
  threshold = 0.1,
): [(node: HTMLDivElement | null) => void, boolean] => {
  const [isInView, setIsInView] = useState(false);

  const handleRef = useCallback(
    (node: HTMLDivElement | null) => {
      let observer: IntersectionObserver | null = null;

      if (node) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setIsInView(entry.isIntersecting);
          },
          { threshold },
        );

        observer.observe(node);
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    },
    [threshold],
  );

  return [handleRef, isInView];
};
