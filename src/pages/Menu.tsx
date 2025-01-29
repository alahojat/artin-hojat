import { useState } from "react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import defaultLogo from "/site-logo/artin-hojat-steel.svg";
import lightLogo from "/site-logo/artin-hojat-fill-orange-bg.svg";

export const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const currentPath = window.location.pathname;
  const isLightBackground = currentPath === "/articles";
  const logo = isLightBackground ? defaultLogo : lightLogo;

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleNavLinkClick = () => {
    scrollToTop("auto");
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  };

  return (
    <>
      <div className="col z-20 w-screen items-center bg-snow md:fixed md:h-12">
        <header className="header-container">
          <section className="mr-5">
            <div className="logo-container">
              <a href="/">
                <img
                  src={logo}
                  alt={"artin hojat logo"}
                  className="logo"
                  aria-label="Return to home"
                />
              </a>
              <div
                className={`menu-button ${menuIsOpen ? "menu-open" : ""}`}
                onClick={toggleMenu}
              >
                <i
                  className={`cursor-pointer ${
                    isLightBackground ? "text-steel" : "text-orange"
                  } md:hidden`}
                >
                  <span className="material-symbols-outlined">more_vert</span>
                </i>
              </div>
            </div>

            {menuIsOpen && (
              <div className="menu-overlay" onClick={toggleMenu}></div>
            )}
          </section>

          <nav
            className={`mobile-nav ${
              menuIsOpen ? "translate-x-0" : "translate-x-full"
            } z-20 transition-transform duration-300 md:static md:h-auto md:w-full md:translate-x-0 md:flex-row md:items-center md:justify-between`}
          >
            <div className="m-4 flex justify-end md:hidden">
              <div className="orange-circle" onClick={toggleMenu}></div>
            </div>

            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/articles"
                  onClick={handleNavLinkClick}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  The art:in Science
                </NavLink>
              </li>
              <li>
                <NavLink to="/player-optimization" onClick={handleNavLinkClick}>
                  Player optimization
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleNavLinkClick}>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/merits" onClick={handleNavLinkClick}>
                  Merits
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleNavLinkClick}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
