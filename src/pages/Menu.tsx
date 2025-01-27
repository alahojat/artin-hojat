import { useState } from "react";
import { NavLink } from "react-router-dom";
import defaultLogo from "/site-logo/artin-hojat-steel.svg";
import lightLogo from "/site-logo/artin-hojat-fill-orange-bg.svg";

export const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const currentPath = window.location.pathname;

  const isDarkBackground =
    currentPath === "/contact" ||
    currentPath === "/player-optimization" ||
    currentPath === "/merits" ||
    currentPath === "/";

  const logo = isDarkBackground ? lightLogo : defaultLogo;

  const toggleMenu = () => {
    console.log("is menu opening");

    setMenuIsOpen(!menuIsOpen);
  };

  const handleNavLinkClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  };

  return (
    <>
      <>
        <header className="z-20 w-full sm:absolute sm:left-0 sm:top-0 md:fixed md:flex md:h-12 md:items-center md:justify-between md:bg-snow md:px-8 md:py-2">
          <section className="mr-5 flex justify-end">
            <div className="row w-full items-center justify-between sm:mt-4 md:mt-0">
              <a href="/">
                <img
                  src={logo}
                  alt={"artin hojat logo"}
                  className="cursor-pointer justify-start sm:ml-6 sm:mt-2 sm:h-16 sm:w-16 md:h-10 md:w-10 lg:ml-2"
                  aria-label="Return to home"
                />
              </a>
              <div
                className={`menu-button ${menuIsOpen ? "menu-open" : ""}`}
                onClick={toggleMenu}
              >
                <i className="cursor-pointer text-orange md:hidden">
                  <span className="material-symbols-outlined">more_vert</span>
                </i>
              </div>
            </div>

            {menuIsOpen && (
              <div
                className="fixed inset-0 z-10 bg-steel bg-opacity-90"
                onClick={toggleMenu}
              ></div>
            )}
          </section>

          <nav
            className={`col fixed right-0 top-0 h-full w-full transform ${
              menuIsOpen ? "translate-x-0" : "translate-x-full"
            } z-20 transition-transform duration-300 md:static md:h-auto md:w-full md:translate-x-0 md:flex-row md:items-center md:justify-between`}
          >
            <div className="m-4 flex justify-end md:hidden">
              <div className="orange-circle" onClick={toggleMenu}></div>
            </div>

            <ul className="menu overflow-x-auto p-4 sm:mt-10 sm:text-right md:mt-0 md:flex md:flex-wrap md:items-end md:gap-4 md:overflow-visible md:text-right lg:gap-10 lg:hover:text-midnight">
              <li>
                <NavLink
                  to={"/articles"}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  The art:in Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/player-optimization"}
                  onClick={handleNavLinkClick}
                >
                  Player optimization
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} onClick={handleNavLinkClick}>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to={"/merits"} onClick={handleNavLinkClick}>
                  Merits
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} onClick={handleNavLinkClick}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
    </>
  );
};
