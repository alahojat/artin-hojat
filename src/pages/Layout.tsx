import { Outlet, useRouteError } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  const error = useRouteError();
  return (
    <>
      <Header></Header>
      <main className="header-sm">{error ? <NotFound /> : <Outlet />}</main>
      <Footer></Footer>
    </>
  );
};
