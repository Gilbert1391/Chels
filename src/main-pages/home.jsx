import React from "react";
import { Link } from "react-router-dom";
import home from "../img/home/home-1.jpg";

const Home = () => {
  const bg = {
    backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
  url(${home})`
  };

  return (
    <React.Fragment>
      <section className="hero" style={bg}>
        <div className="hero-content">
          <h1 className="heading-primary mb-x3">SS — 18</h1>
          <Link to="/shop" className="btn">
            Shop now
          </Link>
        </div>
      </section>
      <h1>Hello world</h1>
      {/* <section className="collections">
        <div className="collections__wrapper-left">
          <article className="collection">
            <a href="" className="collection__item">
              <img
                src="img/home-2.jpg"
                alt="Longe jumpsuit"
                className="collection__img"
              />
              <span className="collection__icon">Lounge jumpsuit</span>
            </a>
          </article>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export default Home;
