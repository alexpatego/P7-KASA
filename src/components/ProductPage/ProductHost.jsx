import React from "react";

const ProductHost = (props) => {
  return (
    <div>
      <p>{props.host.name}</p>
      <img src={props.host.picture} alt={props.host.name} />
    </div>
  );
};

export default ProductHost;
