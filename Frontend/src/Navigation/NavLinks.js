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
          <NavLink to="/schedule">SCHEDULE</NavLink>
        </li>
        <li>
          <NavLink to="/player">VENUES</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
