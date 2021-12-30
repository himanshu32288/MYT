import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && (
        <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
          <nav className="nav-drawer">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <header className="main-header">
        <button className="side-drawer-button" onClick={openDrawerHandler}>
          <MenuIcon />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">MYT</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
