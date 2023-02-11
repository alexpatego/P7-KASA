import React, { useState, useEffect } from "react";
import VectorUP from "../../assets/VectorUP.png";
import VectorDown from "../../assets/VectorDown.png";

const Collapse = ({ title, children }) => {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (show) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [show]);

  return (
    <div className="collapse">
      <div className="collapse__div">
        <h3 className="collapse__div__title">{title}</h3>
        <img
          className={`collapse__div__arrow ${
            !show ? "vectorDown" : "vectorUp"
          }`}
          src={!show ? VectorDown : VectorUP}
          alt="fleche"
          onClick={() => setShow((prevMode) => !prevMode)}
        />
      </div>
      <div className={`collapse__comp animated opacity-${opacity}`}>
        {show ? <p className="collapse__div__description">{children}</p> : null}
      </div>
    </div>
  );
};

export default Collapse;
