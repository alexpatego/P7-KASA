import React, { useState } from "react";
import VectorUP from "../../assets/VectorUP.png";
import VectorDown from "../../assets/VectorDown.png";

const AboutCard = ({ about: { id, title, description } }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="Card" key={id}>
      <div className="AboutTitle">
        <h4>{title}</h4>
        <img
          className="arrow"
          src={!show ? VectorDown : VectorUP}
          alt="fleche"
          onClick={() => setShow((prevMode) => !prevMode)}
        />
      </div>
      <div>
        {show ? <p className="AboutDescription">{description}</p> : null}
      </div>
    </div>
  );
};

export default AboutCard;
