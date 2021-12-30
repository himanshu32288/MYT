import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <NavLink to="/player">Player</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming Matches</NavLink>
        </li>
        <li>
          <NavLink to="/player">Player</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
