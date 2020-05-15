import React, { useState, useEffect } from "react";
import "./Nav.css";
import News from "./News";
// import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";

const Nav = (props) => {
  const { showArticle, item, setOpen, isOpen } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [colNum, setColNum] = useState(6);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const colDropDownItemClicked = (col) => {
    setMenuOpen(false);
    setColNum(col);
  };

  const show = menuOpen ? "show" : "";

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav ">
        <a className="navbar-brand" href="/">
          News Alligator 2
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleMenu()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={"collapse  bg-light navbar-collapse " + show}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {/* <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Disabled" disabled="true" /> */}

            <NavDropdown name="Columns">
              <button
                onClick={() => colDropDownItemClicked(12)}
                className="dropdown-item"
              >
                1
              </button>
              <button
                onClick={() => colDropDownItemClicked(6)}
                className="dropdown-item"
              >
                2
              </button>
              <button
                onClick={() => colDropDownItemClicked(4)}
                className="dropdown-item"
              >
                3
              </button>
              <button
                onClick={() => colDropDownItemClicked(3)}
                className="dropdown-item"
              >
                4
              </button>
            </NavDropdown>
          </ul>
        </div>
      </nav>
      <News colNum={colNum} />
    </React.Fragment>
  );
};

export default Nav;
