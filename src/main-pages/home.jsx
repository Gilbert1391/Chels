import React from "react";
import { Link } from "react-router-dom";
import Collections from "../components/collections";
import home1 from "../img/home/home-1.jpg";
import home2 from "../img/home/home-2.jpg";
import home3 from "../img/home/home-3.jpg";
import home4 from "../img/home/home-4.jpg";
import home5 from "../img/home/home-5.jpg";
import home6 from "../img/home/home-6.jpg";
import home7 from "../img/home/home-7.jpg";
import home8 from "../img/home/home-8.jpg";

const Home = () => {
  const bg = {
    backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
  url(${home1})`
  };

  const bgSale = {
    backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
  url(${home5})`
  };

  return (
    <React.Fragment>
      <section className="hero" style={bg}>
        <div className="hero-content">
          <h1 className="heading-primary mb-x3">SS — 18</h1>
          <Link to="/shop-chels" className="btn">
            Shop now
          </Link>
        </div>
      </section>
      <Collections
        images={[home2, home3, home4]}
        captions={["Loung Jumpsuit", "Lounge Tunic", "Lounge Tunic"]}
      />
      <section className="home-season padding-container-big">
        <h2 className="heading-secondary mb-x3">This Season</h2>
        <h3 className="heading-terciary">
          What if you could dream while you were awake? That’s the question that
          inspired our Spring/Summer 2018 Collection, which features robe-like
          jumpsuits and dresses reminiscent of nightgowns. Women should have the
          freedom to move through the waking world as if they are at rest. So we
          designed our pieces to make every day feel like a comfortable dream.
        </h3>
        <div className="v-line">&nbsp;</div>
        <Link to="/lookbook-chels" className="btn-anchor">
          Lookbook
        </Link>
      </section>
      <section className="hero hero--sale" style={bgSale}>
        <div className="hero-content">
          <h1 className="heading-primary">fw — 18</h1>
          <a href="" className="btn">
            Shop the sale
          </a>
        </div>
      </section>
      <Collections
        images={[home6, home7, home8]}
        captions={["Tan Tote", "Black Tote", "Tan Crossbody"]}
      />
    </React.Fragment>
  );
};

export default Home;
