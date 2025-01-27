import { ContactForm } from "../components/ContactForm";
import { PartnersBanner } from "../components/PartnersBanner";
import { SpotifyEmbed } from "../components/SpotifyEmbed";
import artinmelwin from "/artin-melwin.jpeg";
import melwin from "/melwin-pantzar.png";
import dunk from "/dunk.jpeg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const handleNavLinkClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      <div className="base-img-top bg-steel">
        <section className="-motion-translate-y-in-25 sm:px-4 sm:pt-24">
          <NavLink
            to={"/articles"}
            onClick={handleNavLinkClick}
            className="text-left text-snow sm:subheading-sm lg:heading-lg hover:underline"
          >
            The art:in science
          </NavLink>
        </section>

        <section className="col intersect:motion-preset-slide-left motion-delay-300 items-end space-y-4 sm:p-4">
          <img
            src={dunk}
            alt=""
            className="motion-preset-fade motion-duration-2000 self-center rounded sm:w-64 md:w-44 lg:w-96"
          />

          <h2 className="subheading-alt text-right text-orange">Performance</h2>
        </section>

        <section className="intersect:motion-preset-slide-right motion-delay-700 h-64 bg-steel px-6 sm:p-4">
          <h2 className="subheading-alt intersect:motion-preset-slide-right motion-delay-400 inline text-snow lg:heading-lg">
            Development
          </h2>
          <div className="orange-circle intersect:motion-preset-slide-left motion-delay-500 right- absolute"></div>
        </section>

        <section className="intersect:motion-preset-slide-up motion-delay-4000 m-0 items-end sm:p-4">
          <SpotifyEmbed />
        </section>

        <section className="grid bg-steel sm:grid-cols-1 sm:px-4 sm:py-6 md:grid-cols-2 lg:py-10">
          <img
            src={artinmelwin}
            alt=""
            className="intersect:motion-preset-slide-right motion-delay-700 rounded object-cover sm:w-56 md:mx-auto md:h-96 md:w-44 lg:w-96"
          />
          <h2 className="subheading intersect:motion-preset-slide-down text-snow sm:text-left">
            Join me in advancing our field and collective health.
          </h2>
        </section>
        <section className="border-t-8 border-orange">
          <PartnersBanner />
        </section>
        <section className="mx-auto grid place-items-center bg-steel sm:grid-cols-1 sm:px-4 sm:py-6 md:grid-cols-2">
          <ContactForm></ContactForm>
          <img
            src={melwin}
            alt=""
            className="intersect:motion-preset-slide-left motion-delay-700 rounded object-cover sm:hidden md:mx-auto md:block md:w-44 lg:w-96"
          />
        </section>
      </div>
    </>
  );
};
