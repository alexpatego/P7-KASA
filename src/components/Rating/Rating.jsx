import React from "react";
import fullStar from "../../assets/FullStar.png";
import emptyStar from "../../assets/EmptyStar.png";

const ProductRating = (props) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="product__rating__rate">
      {range.map((rangeElem, i) =>
        rangeElem <= props.rating ? (
          <img src={fullStar} alt="étoile" key={i} />
        ) : (
          <img src={emptyStar} alt="pas étoilé" key={i} />
        )
      )}
    </div>
  );
};

export default ProductRating;
