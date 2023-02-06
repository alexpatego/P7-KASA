import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductHost from "../../components/ProductPage/ProductHost";
import ProductRating from "../../components/ProductPage/ProductRating";
import Carousel from "../../components/ProductPage/Carousel";
import Collapse from "../../components/Collapse/Collapse";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/logements/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>LOADING ...</h1>;

  const equipments = product.equipments.map((i, index) => (
    <li key={index}>{i}</li>
  ));
  return (
    <div>
      <div className="carousel-container">
        <Carousel slides={product.pictures} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.location}</p>

      <div>{product.tags}</div>
      <div>
        {<ProductHost host={product.host} />}
        {<ProductRating rating={product.rating} />}
      </div>
      <div className="apart-collapsed">
        <Collapse title="Description">{product.description}</Collapse>
        <Collapse title="Equipements">{equipments}</Collapse>
      </div>
    </div>
  );
};

export default SingleProduct;
