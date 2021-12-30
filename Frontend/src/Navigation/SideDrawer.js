import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="side-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="sidedrawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
