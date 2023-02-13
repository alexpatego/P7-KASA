import React from "react";

const Tag = ({ tag }) => {
  // après avoir map les tags on les récupère ici
  return <span className="product__infos__tag">{tag}</span>;
};

export default Tag;
