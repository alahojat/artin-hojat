import { useIsInView } from "../hooks/useIsInView";

export const ScrollingBanner = () => {
  const [handleRef, isInView] = useIsInView();

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
