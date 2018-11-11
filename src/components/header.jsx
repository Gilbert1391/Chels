import React from "react";
import { Link } from "react-router-dom";

const Header = ({ pathName }) => {
  const headerClass =
    pathName === "/"
      ? "header padding-container"
      : "header header--dark padding-container";

  return (
    <header className={headerClass}>
      <nav className="nav">
        <ul className="navigation mr-auto">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/shop-chels" className="navigation__link">
              Shop
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/cart" className="navigation__link">
              Cart (0)
            </Link>
          </li>
        </ul>
        <Link to="/" className="nav__logo">
          Chels
        </Link>
        <ul className="navigation ml-auto">
          <li className="navigation__item">
            <Link to="/journal-chels" className="navigation__link">
              Journal
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/lookbook-chels" className="navigation__link">
              Lookbook
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
