import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductHost from "../../components/ProductPage/ProductHost";
import ProductRating from "../../components/ProductPage/ProductRating";
import Carousel from "../../components/ProductPage/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Location from "../../components/ProductPage/Location";
import Title from "../../components/ProductPage/Title";
import Tag from "../../components/ProductPage/Tag";

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

  if (loading) return <h1>Loading...</h1>;

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
        <div className="product__infos__titlelocationtags">
          {<Title title={product.title} />}
          {<Location location={product.location} />}
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
        </div>
        <div className="product__rate">
          {<ProductRating rating={product.rating} />}
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
