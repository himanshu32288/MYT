import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";
const SideDrawer = (props) => {
  return (
    <>
      <CSSTransition
        in={props.show}
        timeout={300}
        classNames="side-in-left"
        mountOnEnter
        unmountOnExit
      >
        <aside className="sidedrawer" onClick={props.onClick}>
          {props.children}
        </aside>
      </CSSTransition>
    </>
  );
};

export default SideDrawer;
