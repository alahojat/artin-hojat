import logo from "/site-logo/artin-hojat-fill-orange-bg.svg";

export const Hero = ({ onClick }: { onClick: () => void }) => {
  return (
    <section className="hero col items-center justify-center" onClick={onClick}>
      <div className="motion-preset-focus motion-duration-2000 z-20">
        <img
          src={logo}
          alt=""
          loading="lazy"
          className="h-auto w-[150px] cursor-pointer"
        />
      </div>
    </section>
  );
};
