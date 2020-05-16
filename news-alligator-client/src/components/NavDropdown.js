import React from "react";
import "./Nav.css";

const NavDropdown = (props) => {
  const { name, children, isToggleOn, setIsToggleOn } = props;

  const showDropdown = () => {
    setIsToggleOn(!isToggleOn);
  };

  const classDropdownMenu = "dropdown-menu" + (isToggleOn ? " show" : "");

  return (
    <li className="nav-item dropdown custom-dropdown">
      <div
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => showDropdown()}
      >
        {name}
      </div>
      <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
        {children}
      </div>
    </li>
  );
};

export default NavDropdown;
