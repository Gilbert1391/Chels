import React from "react";
import { Link } from "react-router-dom";

const Header = ({ changeColor, headerDark }) => {
  return (
    <header className={!headerDark ? "header" : "header header--dark"}>
      <nav className="nav">
        <ul className="navigation mr-auto">
          <li className="navigation__item">
            <Link to="/" className="navigation__link" onClick={changeColor}>
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/shop" className="navigation__link" onClick={changeColor}>
              Shop
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/cart" className="navigation__link" onClick={changeColor}>
              Cart (0)
            </Link>
          </li>
        </ul>
        <Link to="/" className="nav__logo" onClick={changeColor}>
          Chels
        </Link>
        <ul className="navigation ml-auto">
          <li className="navigation__item">
            <Link
              to="/journal"
              className="navigation__link"
              onClick={changeColor}
            >
              Journal
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/lookbook"
              className="navigation__link"
              onClick={changeColor}
            >
              Lookbook
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
