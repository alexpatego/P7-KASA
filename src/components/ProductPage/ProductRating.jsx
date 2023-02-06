import React from "react";
import fullStar from "../../assets/FullStar.png";
import emptyStar from "../../assets/EmptyStar.png";

const ProductRating = (props) => {
  const range = [1, 2, 3, 4, 5];

  return (
    // <div>
    //   <span>
    //     {/* {props.rating}
    //     <FaStar fill={props.rating} /> */}

    //     {[...new Array(totalStars)].map((arr, index) => {
    //       return index < activeStars ? <FaStar /> : <FaStar />;
    //     })}
    //   </span>
    // </div>

    range.map((rangeElem, i) =>
      rangeElem <= props.rating ? (
        <img src={fullStar} alt="étoile" key={i} />
      ) : (
        <img src={emptyStar} alt="pas étoilé" key={i} />
      )
    )
  );
};

export default ProductRating;
