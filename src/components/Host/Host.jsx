import React from "react";

const ProductHost = (props) => {
  // récupère l'ensemble des données de product.host pour les afficher
  return (
    <aside className="product__host__infos__details">
      <p className="product__host__infos__name">{props.host.name}</p>
      <div className="product__host__infos__picture">
        <img src={props.host.picture} alt={props.host.name} />
      </div>
    </aside>
  );
};

export default ProductHost;
