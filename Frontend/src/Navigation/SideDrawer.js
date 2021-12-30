import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="let"
      unmountOnExit
      mountOnEnter
    >
      <aside className="sidedrawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
