import { Outlet, useRouteError } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

export const Layout = () => {
  const error = useRouteError();
  return (
    <>
      <Menu></Menu>
      <main className="header-sm">{error ? <NotFound /> : <Outlet />}</main>
      <Footer></Footer>
    </>
  );
};
