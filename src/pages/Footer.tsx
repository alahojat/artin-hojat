import { ScrollingBanner } from "../components/ScrollingBanner";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import circleLogo from "/site-logo/artin-hojat-circle.svg";

export const Footer = () => {
  return (
    <footer className="col bg-purple sm:h-[450px] md:h-[350px] lg:h-[400px] lg:w-full lg:pb-4">
      <div className="bg-purple flex-shrink-0">
        <ScrollingBanner />
      </div>

      <div className="col md:row mx-4 flex-1 items-center justify-center sm:gap-8 lg:gap-80">
        <div className="mx-2 grid grid-cols-2 sm:gap-20 md:gap-24 lg:max-w-[1500px]">
          <ul className="footer a space-y-2 text-left text-snow">
            <li className="hover:text-steel">
              <a href="/" className="whitespace-nowrap">
                Home
              </a>
            </li>
            <li>
              <a href="/articles" className="whitespace-nowrap">
                The Art in Science
              </a>
            </li>
            <li>
              <a href="/player-optimization" className="whitespace-nowrap">
                Player optimization
              </a>
            </li>
          </ul>
          <ul className="footer a space-y-2 text-left text-snow">
            <li>
              <a href="/contact" className="whitespace-nowrap">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="whitespace-nowrap">
                About
              </a>
            </li>
            <li>
              <a href="/merits" className="whitespace-nowrap">
                Merits
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="md:w-30 h-auto sm:w-28 lg:w-40"
            src={circleLogo}
            alt="site logo"
          />
        </div>
      </div>

      <div className="row my-2 justify-center gap-6">
        <a
          href="https://www.instagram.com/artinhojatg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Artin's Instagram profile"
        >
          <CiInstagram className="text-3xl text-steel" />
        </a>
        <a
          href="https://www.tiktok.com/@artinhojat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Artin's TikTok profile"
        >
          <PiTiktokLogoLight className="text-3xl text-steel" />
        </a>
        <a
          href="https://www.youtube.com/@TheArtinprogress"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Artin's YouTube channel"
        >
          <CiYoutube className="text-3xl text-steel" />
        </a>
        <a
          href="https://www.linkedin.com/in/artinhojat/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Artin's LinkedIn profile"
        >
          <PiLinkedinLogoThin className="text-3xl text-steel" />
        </a>
      </div>
      <div className="text-center">
        <p className="copyright">
          Copyright &copy; Artin Hojat 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};
