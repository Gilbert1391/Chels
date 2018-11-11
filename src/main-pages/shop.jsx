import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ products, ...props }) => {
  const list = [
    { category: "All" },
    { category: "Accesories" },
    { category: "Bottoms" },
    { category: "Dresses + Jumpsuits" },
    { category: "Outwear" },
    { category: "Tops" },
    { category: "- Sale" }
  ];
  if (props.location.search === "?category=-%20Sale")
    return <div>Filtered</div>;

  return (
    <section className="flex padding-container">
      <nav className="shop-nav">
        <ul>
          {list.map(item => (
            <li className="shop-nav__item" key={item.category}>
              <Link
                to={`/shop-chels/?category=${item.category}`}
                className="shop-nav__link"
              >
                {item.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="products">
        {products.map(el => (
          <a href="" className="shop-item" key={el.id}>
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Shop;
