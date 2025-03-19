import { PartnersData } from "../data/PartnersData";
import { useIsInView } from "../hooks/useIsInView";

export const PartnersBanner = () => {
  const [handleRef, isInView] = useIsInView();

  return (
    <div ref={handleRef} className="relative overflow-hidden bg-steel">
      <div className="relative flex w-full items-center overflow-hidden">
        <div
          className={`my-4 flex min-w-full flex-nowrap items-center space-x-8 ${
            isInView ? "animate-scroll" : ""
          }`}
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
    </div>
  );
};
