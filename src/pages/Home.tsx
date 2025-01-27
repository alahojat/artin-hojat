import { ContactForm } from "../components/ContactForm";
import { PartnersBanner } from "../components/PartnersBanner";
import { FaLongArrowAltRight } from "react-icons/fa";
import melwin from "/melwin-pantzar.png";
import artinhojat4 from "/artin-hojat-4.jpg";
import dunk from "/dunk.jpg";
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
        <section className="sm:px-6 sm:pt-24 md:px-10">
          <NavLink
            to={"/articles"}
            onClick={handleNavLinkClick}
            className="text-right text-snow sm:subheading-sm lg:heading-lg hover:underline"
          >
            The art:in science{" "}
            <FaLongArrowAltRight className="inline align-middle" />
          </NavLink>
        </section>

        <section className="col intersect:motion-preset-slide-left motion-delay-300 items-end space-y-4 sm:p-6 md:px-10">
          <img
            src={dunk}
            width="500px"
            height="333px"
            alt="A basketball player trying to dunk the basketball whilst opponent teammember is trying to block"
            className="self-center rounded grayscale hover:grayscale-0 sm:max-w-64 md:max-w-80 lg:max-w-96"
          />
          <h2 className="subheading text-right text-orange">Performance</h2>
        </section>

        <section className="intersect:motion-preset-slide-right motion-delay-700 h-64 bg-steel sm:p-6 md:px-10">
          <NavLink
            to={"/player-optimization"}
            onClick={handleNavLinkClick}
            className="subheading inline text-snow lg:heading-lg hover:underline"
          >
            Development
          </NavLink>
          <div className="orange-circle right- absolute"></div>
          <h2 className="subheading-alt intersect:motion-preset-slide-down text-snow sm:pt-12 sm:text-right">
            Elevate your health, productivity, and happiness.
          </h2>
        </section>

        <section className="grid bg-steel sm:grid-cols-1 sm:px-6 sm:py-6 md:grid-cols-2 md:px-10 lg:py-12">
          <img
            src={melwin}
            width="500px"
            height="333px"
            alt="A basketballplayer and a coach standing on the court"
            className="intersect:motion-preset-slide-right motion-delay-700 rounded object-cover grayscale hover:grayscale-0 sm:w-64 md:mx-auto"
          />

          <NavLink
            to={"/contact"}
            onClick={handleNavLinkClick}
            className="subheading intersect:motion-preset-slide-down text-orange hover:underline sm:text-right"
          >
            Join me in advancing our field and collective health.
          </NavLink>
        </section>
        <section className="border-y border-orange">
          <PartnersBanner />
        </section>

        <section className="mx-auto grid place-items-center bg-steel sm:grid-cols-1 sm:px-4 sm:py-20 md:grid-cols-2">
          <ContactForm></ContactForm>
          <img
            src={artinhojat4}
            alt=""
            className="intersect:motion-preset-slide-left motion-delay-700 rounded object-cover grayscale hover:grayscale-0 sm:hidden md:mx-auto md:block md:w-56 lg:w-96"
          />
        </section>
      </div>
    </>
  );
};
