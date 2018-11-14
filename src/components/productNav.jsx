import React from "react";
import { Link } from "react-router-dom";

const ProductNav = ({ item, onNextButton }) => {
  console.log(item.path);

  return (
    <nav className="product-nav">
      <div className="product-nav__group">
        <Link to="/shop-chels" className="product-nav__link">
          Shop
        </Link>
        <i className="product-nav__icon fa fa-angle-right" />
        <Link to={`${item.path}`} className="product-nav__link">
          {item.product}
        </Link>
      </div>
      <div className="product-nav__group">
        <a className="product-nav__link">
          <i className="product-nav__icon product-nav__icon--prev fa fa-angle-left" />
          previous
        </a>
        <span className="product-nav__icon product-nav__last">&#47;</span>
        <Link
          to={`/shop-chels/${item.path}`}
          className="product-nav__link"
          onClick={() => onNextButton()}
        >
          next
          <i className="product-nav__icon product-nav__icon--next fa fa-angle-right" />
        </Link>
      </div>
    </nav>
  );
};

export default ProductNav;
