import React from "react";

const HomeCard = ({ cover, title }) => {
  // récupération de cover et title
  return (
    // chaque card génére ceci
    <article className="HomeContainer__cards">
      <img className="HomeContainer__cards__img" src={cover} alt={title} />
      <div className="HomeContainer__cards__subtitle">
        <h3>{title}</h3>
      </div>
    </article>
  );
};

export default HomeCard;
