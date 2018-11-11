import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav__group">
          <h4 className="footer-nav__heading">Info</h4>
          <li className="footer-nav__item">
            <Link to="/sizing-chart-chels" className="footer-nav__link">
              Sizing
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/contact-chels" className="footer-nav__link">
              Contact
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/privacy-chels" className="footer-nav__link">
              Privacy
            </Link>
          </li>
        </ul>
        <ul className="footer-nav__group">
          <h4 className="footer-nav__heading">Orders</h4>
          <li className="footer-nav__item">
            <Link to="/shipping-handling-chels" className="footer-nav__link">
              Shipping + Handling
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/returns-exchanges-chels" className="footer-nav__link">
              Return + Exchanges
            </Link>
          </li>
        </ul>
        <ul className="footer-nav__group">
          <h4 className="footer-nav__heading">Locations</h4>
          <li className="footer-nav__item">
            <Link to="/stores-chels" className="footer-nav__link">
              Stores
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/stockists-chels" className="footer-nav__link">
              Stocklists
            </Link>
          </li>
        </ul>
        <ul className="footer-nav__group">
          <h4 className="footer-nav__heading">Social</h4>
          <li className="footer-nav__item">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav__link"
            >
              Instagram
            </a>
          </li>
          <li className="footer-nav__item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav__link"
            >
              Facebook
            </a>
          </li>
        </ul>
        <div className="sign-up">
          <h2 className="heading-secondary">The Latest</h2>
          <form className="sign-up__form" action="#" method="post">
            <input
              className="sign-up__input"
              type="email"
              placeholder="Email Address"
            />
            <button className="sign-up__btn" type="button">
              Sign up
            </button>
          </form>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
