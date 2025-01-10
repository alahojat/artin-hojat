import { useState } from "react";
import { NavLink } from "react-router-dom";
import defaultLogo from "../assets/artin-hojat-steel.svg";
import lightLogo from "../assets/artin-hojat-fill-orange-bg.svg";

export const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const currentPath = window.location.pathname;

  const isDarkBackground =
    currentPath === "/contact" || currentPath === "/player-optimization";

  const logo = isDarkBackground ? lightLogo : defaultLogo;

  const toggleMenu = () => {
    console.log("is menu opening");

    setMenuIsOpen(!menuIsOpen);
  };

  const handleNavLinkClick = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  };

  return (
    <>
      <>
        <header className="z-20 w-full sm:absolute sm:left-0 sm:top-0 md:flex md:h-16 md:items-center md:justify-between md:bg-chalk md:px-8 md:py-2">
          <section className="mr-5 mt-5 flex justify-end md:hidden">
            <div
              className={`menu-button ${menuIsOpen ? "menu-open" : ""}`}
              onClick={toggleMenu}
            >
              <img
                src={logo}
                alt={menuIsOpen ? "Close menu" : "Open menu"}
                className="h-16 w-16 cursor-pointer"
              />
            </div>

            {menuIsOpen && (
              <div
                className="fixed inset-0 z-10 bg-steel bg-opacity-90"
                onClick={toggleMenu}
              ></div>
            )}
          </section>

          <nav
            className={`fixed right-0 top-0 flex h-full w-full transform flex-col ${
              menuIsOpen ? "translate-x-0" : "translate-x-full"
            } z-20 transition-transform duration-300 md:static md:h-auto md:w-full md:translate-x-0 md:flex-row md:items-center md:justify-between`}
          >
            <div className="m-4 flex justify-end md:hidden">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-orange"
                onClick={toggleMenu}
              ></div>
            </div>

            <ul className="menu pr-4 text-right md:flex md:space-x-6 md:pr-0 md:text-left">
              <li>
                <NavLink to={"/"} onClick={handleNavLinkClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} onClick={handleNavLinkClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} onClick={handleNavLinkClick}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to={"/articles"} onClick={handleNavLinkClick}>
                  The Art in Science
                </NavLink>
              </li>
              <li>
                <NavLink to={"/merits"} onClick={handleNavLinkClick}>
                  Merits
                </NavLink>
              </li>
              <li>
                <NavLink to={"/consulting"} onClick={handleNavLinkClick}>
                  Consulting
                </NavLink>
              </li>
              <li>
                <NavLink to={"/partners"} onClick={handleNavLinkClick}>
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/player-optimization"}
                  onClick={handleNavLinkClick}
                >
                  Players
                </NavLink>
              </li>
            </ul>

            <img
              src={logo}
              alt={"artin hojat logo"}
              className="hidden h-16 w-16 cursor-pointer md:block"
            />
          </nav>
        </header>
      </>
    </>
  );
};
