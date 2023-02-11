import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductHost from "../../components/ProductPage/ProductHost";
import ProductRating from "../../components/ProductPage/ProductRating";
import Carousel from "../../components/ProductPage/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/ProductPage/Tag";
import Error from "../../components/Error/Error";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/logements/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!loading) {
      document.title = product.title || "Kasa - Appartement";
    }
  }, [loading, product.title]);

  // Conditions pour affichage des pages et éviter les faux ids

  if (loading) return null;
  if (id !== product.id) {
    return <Error />;
  }

  const equipments = product.equipments.map((i, index) => (
    <li className="equipments__list" key={index}>
      {i}
    </li>
  ));

  return (
    <div key={id} className="product__container">
      <div className="product__carousel">
        <Carousel slides={product.pictures} />
      </div>
      <div className="product__infos">
        <div className="product__infos__container">
          <div className="product__infos__title">
            <h1>{product.title}</h1>
            <h3>{product.location}</h3>
          </div>
          <div className="product__infos__tags">
            {product.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
        <div className="product__host">
          <div className="product__host__infos">
            {<ProductHost host={product.host} />}
          </div>
          <div className="product__host__rating">
            {<ProductRating rating={product.rating} />}
          </div>
        </div>
      </div>
      <div className="product__collapse">
        <Collapse title="Description">{product.description}</Collapse>
        <Collapse title="Equipements">{equipments}</Collapse>
      </div>
    </div>
  );
};

export default SingleProduct;
