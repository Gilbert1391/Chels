import React from "react";
import SocialNav from "./socialNav";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="product__img-wrapper">
        <img src={item.image} alt={item.product} className="product__img" />
      </div>
      <div className="product__info-wrapper">
        <h2 className="heading-secondary">{item.product}</h2>
        <p className="product__price">{item.price}</p>
        <p className="product__description">{item.description}</p>
        <div className="detail-group">
          <p className="detail-group__name">Size:</p>
          <i className="detail-group__size-icon fa fa-caret-down" />
          <select className="detail-group__size">
            <option value="">Select Size</option>
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="detail-group">
          <p className="detail-group__name">Quantity:</p>
          <input
            className="detail-group__quantity"
            max="9999"
            min="1"
            defaultValue="1"
            type="number"
          />
        </div>
        <button type="button" className="btn btn--add">
          Add to cart
        </button>
        <SocialNav />
      </div>
    </div>
  );
};

export default Product;
