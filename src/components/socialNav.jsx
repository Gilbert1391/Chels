import React from "react";

const SocialNav = () => {
  return (
    <nav className="social">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <i className="social__icon fa fa-facebook" />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <i className="social__icon fa fa-twitter" />{" "}
      </a>
      <a
        href="https://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <i className="social__icon fa fa-pinterest" />
      </a>
    </nav>
  );
};

export default SocialNav;
