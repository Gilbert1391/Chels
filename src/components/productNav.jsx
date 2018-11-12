import React from "react";
import { Link } from "react-router-dom";

const ProductNav = ({ item }) => {
  return (
    <nav className="product-nav">
      <Link to="/shop-chels" className="product-nav__link">
        Shop
      </Link>
      <span className="product-nav__icon">&rsaquo;</span>
      <Link to={`${item.path}`} className="product-nav__link">
        {item.product}
      </Link>
      {/* <div className="product-nav__buttons">
        <span className="product-nav__arrow-prev product-nav__last">
          &rsaquo;
        </span>
        <a
          href="swingdress.html"
          className="product-nav__link product-nav__last"
        >
          previous
        </a>
        <span className="product-nav__icon product-nav__last">&#47;</span>
        <a href="swingdress.html" className="product-nav__link">
          next
        </a>
        <span className="product-nav__arrow-next">&rsaquo;</span>
      </div> */}
    </nav>
  );
};

export default ProductNav;
