import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card.jsx";

const Home = () => {
  const [data, setData] = useState([]);

  // on fetch les données depuis le db.json grâce à json-server
  useEffect(() => {
    const logementCard = async () => {
      const response = await fetch("http://localhost:8000/logements");
      const data = await response.json();

      setData(data);
    };
    logementCard();
    document.title = "Kasa"; // on affiche le titre du site sur la fenêtre
  }, []);

  return (
    <div>
      <Banner />
      <div className="HomeContainer">
        {data.map((logement, i) => (
          <div className="HomeContainer__cards" key={i}>
            <Link to={`/logements/${logement.id}`}>
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
