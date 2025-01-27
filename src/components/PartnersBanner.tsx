import { useState } from "react";
import { PartnersData } from "../data/PartnersData";

export const PartnersBanner = () => {
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
            setIsInView(entry.isIntersecting);
          },
          { threshold: 0.1 },
        );

        observer.observe(node);
      }
    };
  })();

  return (
    <div ref={handleRef} className="relative overflow-hidden bg-steel px-4">
      <div
        className={`${
          isInView
            ? "animate-scroll sm:animate-[scroll_25s_linear_infinite] lg:animate-[scroll_30s_linear_infinite]"
            : ""
        } my-4 flex w-full items-center space-x-8`}
      >
        {[...PartnersData, ...PartnersData].map((partner, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={partner.src}
              alt={partner.alt}
              height={partner.height || 50}
              width={partner.width || 50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
