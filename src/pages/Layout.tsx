import { NavLink, Outlet, useRouteError } from "react-router-dom";
import { NotFound } from "./NotFound";

export const Layout = () => {
  const error = useRouteError();
  return (
    <>
      <header className="m-7 bg-gray-900 p-4">
        <nav>
          <h4 className="m-7 text-white">This is the navigation section</h4>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/articles"}>The Art in Science</NavLink>
            </li>
            <li>
              <NavLink to={"/merits"}>Merits</NavLink>
            </li>
            <li>
              <NavLink to={"/consulting"}>Consulting</NavLink>
            </li>
            <li>
              <NavLink to={"/partners"}>Brands</NavLink>
            </li>
            <li>
              <NavLink to={"/player-optimization"}>Players</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="m-7">{error ? <NotFound /> : <Outlet />}</main>
      <footer>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-section">
              <h2>This is the footer</h2>
            </div>

            <div className="footer-follow">
              <p>
                <a href="#">Facebook</a> |<a href="#">Twitter</a> |
                <a href="#">Instagram</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Artin Hojat</p>
          </div>
        </div>
      </footer>
    </>
  );
};
