import logo from "../assets/site-logo/artin-hojat-fill-orange-bg.svg";

export const Hero = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <section className="hero col items-start justify-start" onClick={onDismiss}>
      <div className="motion-preset-focus motion-duration-2000 z-20">
        <img
          src={logo}
          alt=""
          loading="lazy"
          className="h-auto w-[200px] cursor-pointer"
        />
      </div>
    </section>
  );
};
