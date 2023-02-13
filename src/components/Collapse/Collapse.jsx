import React, { useState, useEffect } from "react";
import VectorUP from "../../assets/VectorUP.png";
import VectorDown from "../../assets/VectorDown.png";

const Collapse = ({ title, children }) => {
  const [show, setShow] = useState(false); // défini un status show qui est par défault en false.
  const [opacity, setOpacity] = useState(0); // défini un status opacity qui permet de gérer l'opacity de la description

  useEffect(() => {
    if (show) {
      // si un clic est généré alors l'opacité passe de 0 à 1
      setOpacity(1);
    } else {
      // sinon elle reste à 0
      setOpacity(0);
    }
  }, [show]);

  return (
    // le collapse est par défault fermé, quand on clique on l'ouvre
    <div className="collapse">
      <div className="collapse__div">
        <h3 className="collapse__div__title">{title}</h3>
        <img
          className={`collapse__div__arrow ${
            !show ? "vectorDown" : "vectorUp"
          }`}
          src={!show ? VectorDown : VectorUP} // la position de la flêche change en fonction du clic
          alt="fleche"
          onClick={() => setShow((prevMode) => !prevMode)} // le clic deplie la description
        />
      </div>

      <div className={`collapse__comp animated opacity-${opacity}`}>
        {/* une class opacity-1 ou 0 applique un style au dépliage */}
        {show ? <p className="collapse__div__description">{children}</p> : null}
      </div>
    </div>
  );
};

export default Collapse;
