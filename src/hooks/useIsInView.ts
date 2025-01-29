import { useState, useCallback, useEffect, useRef } from "react";

export const useIsInView = (
  threshold = 0.1,
): [(node: HTMLDivElement | null) => void, boolean] => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null); // Store node reference

  const handleRef = useCallback((node: HTMLDivElement | null) => {
    if (nodeRef.current !== node) {
      nodeRef.current = node;
    }
  }, []);

  useEffect(() => {
    if (!observerRef.current && nodeRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold },
      );

      observerRef.current.observe(nodeRef.current);
    }
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [threshold]);

  return [handleRef, isInView];
};
