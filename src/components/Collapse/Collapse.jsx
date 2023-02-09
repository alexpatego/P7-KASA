import React, { useState } from "react";
import VectorUP from "../../assets/VectorUP.png";
import VectorDown from "../../assets/VectorDown.png";

const Collapse = ({ title, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__div">
        <h3 className="collapse__div__title">{title}</h3>
        <img
          className="collapse__div__arrow"
          src={!show ? VectorDown : VectorUP}
          alt="fleche"
          onClick={() => setShow((prevMode) => !prevMode)}
        />
      </div>
      <div>
        {show ? <p className="collapse__div__description">{children}</p> : null}
      </div>
    </div>
  );
};

export default Collapse;
