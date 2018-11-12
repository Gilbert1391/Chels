import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ products, categories, ...props }) => {
  let filtered = products;

  if (props.location.search) {
    filtered = products.filter(
      el => `?category=${el.category}` === props.location.search
    );
  }

  return (
    <section className="flex padding-container">
      <nav className="shop-nav">
        <ul>
          {categories.map(item => (
            <li className="shop-nav__item" key={item.id}>
              <Link
                to={
                  item.category !== "All"
                    ? `/shop-chels/?category=${item.category.replace(/ /g, "")}`
                    : "/shop-chels"
                }
                className="shop-nav__link"
              >
                {item.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="products">
        {filtered.map(el => (
          <Link
            to={`/shop-chels/${el.path}`}
            className="shop-item"
            key={el.product}
          >
            {el.sale ? <span className="shop-item__sale">Sale</span> : ""}
            <img src={el.image} alt={el.product} className="shop-item__img" />
            <div className="quickview">
              <button className="quickview__button">Quick View</button>
              <div className="quickview__info">
                {el.product}
                <p className="quickview__price">
                  {el.price}
                  {el.sale ? (
                    <span className="quickview__price--sale">$150.00</span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Shop;
