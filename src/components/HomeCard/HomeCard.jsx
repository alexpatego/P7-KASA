import React from "react";

const HomeCard = ({ cover, title }) => {
  return (
    <article>
      <img src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
      </div>
    </article>
  );
};

export default HomeCard;
