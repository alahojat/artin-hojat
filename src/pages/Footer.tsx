import circleLogo from "../assets/artin-hojat-circle.svg";
import instagram from "../assets/icons/instagram-svgrepo-com.svg";
import linkedIn from "../assets/icons/linkedin-svgrepo-com.svg";
import tikTok from "../assets/icons/tiktok-logo-thin-svgrepo-com.svg";
import youtube from "../assets/icons/youtube-tv-svgrepo-com.svg";
import { ScrollingBanner } from "../components/ScrollingBanner";

export const Footer = () => {
  return (
    <footer className="bg-orange flex h-[550px] flex-col lg:h-[420px] lg:w-full lg:pb-4">
      <div className="flex-shrink-0">
        <ScrollingBanner />
      </div>

      <section className="mx-4 flex flex-1 items-center justify-around sm:flex-col md:flex md:gap-12 lg:flex-row">
        <div className="my-8 flex items-center justify-center">
          <img
            className="md:w-30 h-auto sm:w-28 lg:w-40"
            src={circleLogo}
            alt="Logo"
          />
        </div>

        <div className="mx-4 grid grid-cols-2 gap-12 md:gap-24">
          <ul className="footer a space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/articles">The Art in Science</a>
            </li>
          </ul>

          <ul className="footer a space-y-2">
            <li>
              <a href="/merits">Merits</a>
            </li>
            <li>
              <a href="/consulting">Consulting</a>
            </li>
            <li>
              <a href="/partners">Brands</a>
            </li>
            <li>
              <a href="/player-optimization">Players</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-auto w-10" src={instagram} alt="Instagram icon" />
          </a>
          <a
            href="https://www.tiktok.com/@artinhojat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-auto w-10" src={tikTok} alt="TikTok icon" />
          </a>
          <a
            href="https://www.youtube.com/@TheArtinprogress"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-auto w-10" src={youtube} alt="YouTube icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/artinhojat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-auto w-10" src={linkedIn} alt="LinkedIn icon" />
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
