import React, { useState } from "react";
import VectorLeft from "../../assets/VectorLeft.png";
import VectorRight from "../../assets/VectorRight.png";

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <img
        src={VectorLeft}
        alt="Précedent"
        onClick={prevSlide}
        className="leftArrow"
      />
      <img src={slides[current]} alt="appartement" />
      <span className="slide-number">
        {current + 1}/{length}
      </span>
      <img
        src={VectorRight}
        alt="Suivant"
        onClick={nextSlide}
        className="rightArrow"
      />
    </div>
  );
};

export default Carrousel;
