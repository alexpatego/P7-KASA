import React from "react";
import fullStar from "../../assets/FullStar.png";
import emptyStar from "../../assets/EmptyStar.png";

const ProductRating = (props) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="product__rating__rate">
      {range.map((rangeElem, i) =>
        rangeElem <= props.rating ? (
          <img src={fullStar} alt="étoile" key={i} /> // image FullStar ou emptyStar en fonction de la note récupère sur le serveur et passé en props
        ) : (
          <img src={emptyStar} alt="pas étoilé" key={i} />
        )
      )}
    </div>
  );
};

export default ProductRating;
