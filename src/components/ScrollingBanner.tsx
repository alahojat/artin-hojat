import { useState } from "react";

export const ScrollingBanner = () => {
  const [isInView, setIsInView] = useState(false);

  const handleRef = (() => {
    let observer: IntersectionObserver | null = null;

    return (node: HTMLDivElement | null) => {
      if (observer) {
        observer.disconnect();
      }

      if (node) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView(true);
            } else {
              setIsInView(false);
            }
          },
          { threshold: 0.1 },
        );

        observer.observe(node);
      }
    };
  })();

  return (
    <div
      ref={handleRef}
      className="relative mt-4 h-[65px] w-full overflow-hidden bg-steel"
    >
      <div
        className={`absolute mt-2 whitespace-nowrap transition-transform ${
          isInView ? "animate-marquee-start" : ""
        }`}
      >
        <h2 className="subheader subheader-light inline-block uppercase">
          Performance Optimization Performance Optimization
        </h2>
        <h2 className="subheader subheader-light inline-block uppercase">
          Performance Optimization Performance Optimization
        </h2>
      </div>
    </div>
  );
};
