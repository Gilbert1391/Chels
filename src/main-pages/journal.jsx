import React from "react";
import { journalData } from "../services/fakeDataService";

const Journal = () => {
  console.log(journalData);
  return (
    <section className="journal">
      {journalData.map(a => (
        <article className="journal__article" key={a.id}>
          <a href="" className="journal__item">
            <img src={a.image} alt="Bricks" className="journal__img" />
          </a>
          <div className="journal__desc">
            <p className="journal__author">
              {a.author} &#183; {a.date}
            </p>
            <a href="" className="journal__title">
              {a.title}
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Journal;
