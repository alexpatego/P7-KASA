import React, { useState, useEffect } from "react";
import VectorLeft from "../../assets/VectorLeft.png";
import VectorRight from "../../assets/VectorRight.png";

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0); // index de slides commence à 0
  const [opacity, setOpacity] = useState(1); // gérer l'opacity qui commence avec une valeur de 1
  const [transition, setTransition] = useState(false); // gérer les transitions entre les slides
  const length = slides.length; // longueur du tableau des slides

  useEffect(() => {
    setTransition(true);
    setTimeout(() => {
      setOpacity(1);
    }, 0);
  }, [current]);

  const nextSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1); // on ajoute 1 au tableau des slides et on repart au premier quand on arrive à la fin
      setTransition(false);
    }, 200);
  };

  const prevSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrent(current === 0 ? length - 1 : current - 1); // on ajoute -1 au tableau des slides et on repart au dernier quand on arrive au premier
      setTransition(false);
    }, 200);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      {length > 1 && ( //si longueur du table > 1, les flêches sont disponibles
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
          transition: transition ? "opacity 0.2s ease-in-out" : "none", // permet de gérer l'opacity et la transition entre chaque changement de slides
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
