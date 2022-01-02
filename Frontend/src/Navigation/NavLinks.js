import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <NavLink to="/player">PLAYERS</NavLink>
        </li>
        <li>
          <NavLink to="/">SCHEDULE</NavLink>
        </li>
        <li>
          <NavLink to="/venue">VENUES</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
