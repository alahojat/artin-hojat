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
    currentPath === "/merits";

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
        <header className="z-20 w-full sm:absolute sm:left-0 sm:top-0 md:fixed md:flex md:h-16 md:items-center md:justify-between md:bg-snow md:px-8 md:py-2">
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
            className={`col fixed right-0 top-0 h-full w-full transform ${
              menuIsOpen ? "translate-x-0" : "translate-x-full"
            } z-20 transition-transform duration-300 md:static md:h-auto md:w-full md:translate-x-0 md:flex-row md:items-center md:justify-between`}
          >
            <div className="m-4 flex justify-end md:hidden">
              <div className="orange-circle" onClick={toggleMenu}></div>
            </div>

            <ul className="menu overflow-x-auto p-4 sm:mt-10 sm:text-right md:mt-0 md:flex md:flex-wrap md:items-start md:gap-4 md:overflow-visible md:text-left lg:gap-10">
              <li>
                <NavLink
                  to={"/articles"}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  The art in Science
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
                <NavLink to={"/partners"} onClick={handleNavLinkClick}>
                  Partners
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} onClick={handleNavLinkClick}>
                  About
                </NavLink>
              </li>
            </ul>

            <a
              href="/"
              onClick={(e) => {
                if (menuIsOpen) {
                  e.preventDefault();
                  toggleMenu();
                } else {
                  handleNavLinkClick();
                }
              }}
            >
              <img
                src={logo}
                alt={"artin hojat logo"}
                className="ml-4 hidden h-16 w-16 cursor-pointer md:block"
              />
            </a>
          </nav>
        </header>
      </>
    </>
  );
};
