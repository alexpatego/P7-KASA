import React, { useState } from "react";
import VectorUP from "../../assets/VectorUP.png";
import VectorDown from "../../assets/VectorDown.png";

const Collapse = ({ title, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="Card">
      <div className="AboutTitle">
        <h3>{title}</h3>
        <img
          className="arrow"
          src={!show ? VectorDown : VectorUP}
          alt="fleche"
          onClick={() => setShow((prevMode) => !prevMode)}
        />
      </div>
      <div>{show ? <p className="AboutDescription">{children}</p> : null}</div>
    </div>
  );
};

export default Collapse;
