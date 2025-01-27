import { Outlet, useLocation, useRouteError } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { Hero } from "./Hero";
import { useState } from "react";

export const Layout = () => {
  const error = useRouteError();
  const location = useLocation();
  const heroAlreadyShown = sessionStorage.getItem("heroShown") === "true";
  const [showHero, setShowHero] = useState(() => {
    return location.pathname === "/" && !heroAlreadyShown;
  });

  if (showHero) {
    setTimeout(() => {
      setShowHero(false);
      sessionStorage.setItem("heroShown", "true");
    }, 4000);
  }

  const handleHeroClick = () => {
    setShowHero(false);
    sessionStorage.setItem("heroShown", "true");
  };

  return (
    <>
      {showHero ? (
        <Hero onClick={handleHeroClick} />
      ) : (
        <div className="flex min-h-screen flex-col">
          <Menu />
          <main className="flex-grow">{error ? <NotFound /> : <Outlet />}</main>
          <Footer />
        </div>
      )}
    </>
  );
};
