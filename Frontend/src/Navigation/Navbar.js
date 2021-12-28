import { useState } from "react";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ open });
  };

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      <header>
        {drawerIsOpen && (
          <SwipeableDrawer
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            Hello Uncle
          </SwipeableDrawer>
        )}
        <button onClick={toggleDrawer(true)}>
          <DehazeIcon />
        </button>
        <nav>
          <NavLinks />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
