import { Outlet, useLocation, useRouteError } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { Hero } from "./Hero";
import { useState } from "react";

export const Layout = () => {
  const error = useRouteError();
  const location = useLocation();
  const [showHero, setShowHero] = useState(location.pathname === "/");

  const handleHeroDismiss = () => {
    setShowHero(false);
  };

  return (
    <>
      {showHero ? (
        <Hero onDismiss={handleHeroDismiss} />
      ) : (
        <>
          <Menu />
          <main>{error ? <NotFound /> : <Outlet />}</main>
          <Footer />
        </>
      )}
    </>
  );
};
