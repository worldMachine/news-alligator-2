import React, { useState } from "react";
import "./Nav.css";

const NavDropdown = (props) => {
  const { name, children } = props;

  const [isToggleOn, setIsToggleOn] = useState(false);

  const showDropdown = () => {
    setIsToggleOn(!isToggleOn);
  };
  // const hideDropDown = () => {
  //   setIsToggleOn(false);
  // };

  const classDropdownMenu = "dropdown-menu" + (isToggleOn ? " show" : "");

  return (
    <li className="nav-item dropdown custom-dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => showDropdown()}
        // onBlur={() => showDropdown()}
        // onFocus={() => showDropdown()}
        tabIndex="0"
      >
        {name}
      </a>
      <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
        {children}
      </div>
    </li>
  );
};

export default NavDropdown;
