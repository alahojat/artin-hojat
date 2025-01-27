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
      className="relative mt-4 w-full overflow-hidden bg-steel sm:h-[60px] lg:h-[90px]"
    >
      <div
        className={`absolute whitespace-nowrap transition-transform ${
          isInView ? "animate-marquee-start" : ""
        }`}
      >
        <h2 className="subheading subheading-light inline-block uppercase">
          Optimize your performance Optimize your performance
        </h2>
        <h2 className="subheading subheading-light inline-block uppercase">
          Optimize your performance Optimize your performance
        </h2>
      </div>
    </div>
  );
};
