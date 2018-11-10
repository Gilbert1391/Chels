import React from "react";

const Collections = ({ images, captions }) => {
  return (
    <section className="collections">
      <div className="collections__wrapper-left">
        <article className="collection">
          <a href="" className="collection__item">
            <figure className="collection__figure">
              <img
                src={images[0]}
                alt={captions[0]}
                className="collection__img"
              />
              <figcaption className="collection__caption">
                {captions[0]}
              </figcaption>
            </figure>
          </a>
        </article>
      </div>
      <div className="collections__wrapper-right">
        <article className="collection">
          <a href="" className="collection__item">
            <figure className="collection__figure">
              <img
                src={images[1]}
                alt={captions[1]}
                className="collection__img"
              />
              <figcaption className="collection__caption">
                {captions[1]}
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="collection">
          <a href="" className="collection__item">
            <figure className="collection__figure">
              <img
                src={images[2]}
                alt={captions[2]}
                className="collection__img"
              />
              <figcaption className="collection__caption">
                {captions[2]}
              </figcaption>
            </figure>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Collections;
