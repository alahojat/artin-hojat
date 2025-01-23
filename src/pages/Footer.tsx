import circleLogo from "/site-logo/artin-hojat-circle.svg";
import { CiYoutube } from "react-icons/ci";
import { ScrollingBanner } from "../components/ScrollingBanner";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="col bg-orange sm:h-[500px] md:h-[550] lg:h-[350px] lg:w-full lg:pb-4">
      <div className="flex-shrink-0 bg-midnight">
        <ScrollingBanner />
      </div>

      <section className="sm:col lg:row mx-4 flex-1 items-center justify-center md:flex md:gap-6 lg:mx-auto lg:max-w-[1100px] lg:items-start">
        <div className="my-8 flex items-center justify-center">
          <img
            className="md:w-30 h-auto sm:w-28 lg:w-40"
            src={circleLogo}
            alt="site logo"
          />
        </div>

        <div className="mx-4 grid grid-cols-2 gap-12 md:gap-24 lg:mt-8">
          <ul className="footer a space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/articles">The Art in Science</a>
            </li>
            <li>
              <a href="/player-optimization">Player optimization</a>
            </li>
          </ul>
          <ul className="footer a space-y-2">
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/merits">Merits</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
          </ul>
        </div>

        <div className="row mt-8 justify-center gap-6">
          <a
            href="https://www.instagram.com/artinhojatg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiInstagram className="text-3xl text-steel" />
          </a>
          <a
            href="https://www.tiktok.com/@artinhojat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiTiktokLogoLight className="text-3xl text-steel" />
          </a>
          <a
            href="https://www.youtube.com/@TheArtinprogress"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiYoutube className="text-3xl text-steel" />
          </a>
          <a
            href="https://www.linkedin.com/in/artinhojat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogoThin className="text-3xl text-steel" />
          </a>
        </div>
      </section>

      <div className="text-center">
        <p className="copyright">
          Copyright &copy; Artin Hojat 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};
