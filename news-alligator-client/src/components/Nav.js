import React, { useState, useEffect } from "react";
import "./Nav.css";
import News from "./News";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";

const Nav = (props) => {
  const { showArticle, item, setOpen, isOpen } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [colNum, setColNum] = useState(12);

  const closeCardClicked = () => {
    // setItem(item);
    setOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const useSetColNum = (num) => {
  //   setColNum(num);
  //   console.log("colNum is now: ", colNum);
  // };
  // useEffect(() => {
  //   console.log("colNum changed to: ", colNum);
  // }, [colNum]);

  // console.log("showArticle is ", showArticle);
  const show = menuOpen ? "show" : "";

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav ">
        <a className="navbar-brand" href="/">
          Navbar
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
            <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Disabled" disabled="true" />

            <NavDropdown name="Columns">
              <button onClick={() => setColNum(12)} className="dropdown-item">
                1
              </button>
              <button onClick={() => setColNum(6)} className="dropdown-item">
                2
              </button>
              <button onClick={() => setColNum(4)} className="dropdown-item">
                3
              </button>
              <button onClick={() => setColNum(3)} className="dropdown-item">
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
