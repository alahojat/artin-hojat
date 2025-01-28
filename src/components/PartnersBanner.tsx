import { useIsInView } from "../hooks/useIsInView";
import { PartnersData } from "../data/PartnersData";

export const PartnersBanner = () => {
  const [handleRef, isInView] = useIsInView();

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
              height={partner.height}
              width={partner.width}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
