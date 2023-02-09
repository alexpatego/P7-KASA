import React from "react";

const ProductHost = (props) => {
  return (
    <div>
      <p className="product__host__infos__name">{props.host.name}</p>
      <img
        className="product__host__infos__img"
        src={props.host.picture}
        alt={props.host.name}
      />
    </div>
  );
};

export default ProductHost;
