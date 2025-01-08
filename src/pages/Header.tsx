import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="flex-column m-7 flex p-4">
        <nav>
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
    </>
  );
};
