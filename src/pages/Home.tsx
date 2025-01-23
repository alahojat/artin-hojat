import { SpotifyEmbed } from "../components/SpotifyEmbed";
import artinhojat2 from "/artin-hojat-3.jpg";
import jimmy from "/jimmy.jpeg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="w-full max-w-[1470px] flex-grow items-center bg-ice pt-24 sm:pb-16 md:mt-4 lg:pb-16">
        <section className="bg-chalk">Hello</section>

        <section className="flex-grow bg-steel">
          <div className="orange-circle right-4"></div>
          <NavLink
            to={"/articles"}
            className="subheading left-12 top-20 text-orange"
          >
            The art in Science
          </NavLink>
          <h2 className="subheading subheading-light left-8 top-24">
            Psychology
          </h2>
        </section>
        <section className="flex-grow bg-midnight">
          <img
            src={artinhojat2}
            alt=""
            className="motion-preset-fade motion-duration-3000"
          />

          <img
            src={jimmy}
            alt=""
            className="motion-preset-fade motion-duration-3000"
          />
          <SpotifyEmbed></SpotifyEmbed>
        </section>
      </div>
    </>
  );
};
