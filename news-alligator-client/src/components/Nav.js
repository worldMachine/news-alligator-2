import React, { useState } from "react";
import "./Nav.css";
import "./theme.css";
import News from "./News";
import NavDropdown from "./NavDropdown";

const Nav = (props) => {
  // const { showArticle, item, setOpen, isOpen } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [colNum, setColNum] = useState(6);
  const [textImagePref, setTextImagePref] = useState(true);

  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isImageToggleOn, setIsImageToggleOn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const colDropDownItemClicked = (col) => {
    setMenuOpen(false);
    setIsToggleOn(!isToggleOn);
    setColNum(col);
  };

  const imgDropDownItemClicked = (pref) => {
    setMenuOpen(false);
    setIsImageToggleOn(!isImageToggleOn);
    setTextImagePref(pref);
  };

  const show = menuOpen ? "show" : "";

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="shadow navbar navbar-expand-lg navbar-dark dark-card-bg-color ">
          <a className="navbar-brand  " href="/">
            News Alligator 2
          </a>
          <button
            className="navbar-toggler no-bs-border"
            type="button"
            onClick={() => toggleMenu()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={"collapse  navbar-collapse " + show}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {/* <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Disabled" disabled="true" /> */}

              <NavDropdown
                name="Columns"
                setIsToggleOn={setIsToggleOn}
                isToggleOn={isToggleOn}
              >
                <button
                  onClick={() => colDropDownItemClicked(12)}
                  className="dropdown-item no-bs-border"
                >
                  1
                </button>
                <button
                  onClick={() => colDropDownItemClicked(6)}
                  className="dropdown-item no-bs-border"
                >
                  2
                </button>
                <button
                  onClick={() => colDropDownItemClicked(4)}
                  className="dropdown-item no-bs-border"
                >
                  3
                </button>
                <button
                  onClick={() => colDropDownItemClicked(3)}
                  className="dropdown-item no-bs-border"
                >
                  4
                </button>
              </NavDropdown>

              <NavDropdown
                name="Card"
                setIsToggleOn={setIsImageToggleOn}
                isToggleOn={isImageToggleOn}
              >
                <button
                  onClick={() => imgDropDownItemClicked(false)}
                  className="dropdown-item no-bs-border"
                >
                  Text Only
                </button>
                <button
                  onClick={() => imgDropDownItemClicked(true)}
                  className="dropdown-item no-bs-border"
                >
                  Text and Image
                </button>
              </NavDropdown>
            </ul>
          </div>
        </nav>
      </div>
      <News colNum={colNum} textImagePref={textImagePref} />
    </React.Fragment>
  );
};

export default Nav;
