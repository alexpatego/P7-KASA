import React, { useState, useEffect } from "react";
import VectorLeft from "../../assets/VectorLeft.png";
import VectorRight from "../../assets/VectorRight.png";

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
    setTimeout(() => {
      setOpacity(1);
    }, 0);
  }, [current]);

  const length = slides.length;

  const nextSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      setTransition(false);
    }, 200);
  };

  const prevSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrent(current === 0 ? length - 1 : current - 1);
      setTransition(false);
    }, 200);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      {length > 1 && (
        <>
          <img
            src={VectorLeft}
            alt="Précédent"
            onClick={prevSlide}
            className="product__carousel__leftArrow"
          />
          <img
            src={VectorRight}
            alt="Suivant"
            onClick={() => {
              nextSlide();
            }}
            className="product__carousel__rightArrow"
          />
        </>
      )}
      <img
        style={{
          opacity: opacity,
          transition: transition ? "opacity 0.2s ease-in-out" : "none",
        }}
        className="product__carousel__img"
        src={slides[current]}
        alt="appartement"
      />
      {length > 1 && (
        <>
          <span className="product__carousel__number">
            {current + 1}/{length}
          </span>
        </>
      )}
    </div>
  );
};

export default Carrousel;
