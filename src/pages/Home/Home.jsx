import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCard from "../../components/HomeCard/HomeCard.jsx";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const logementCard = async () => {
      const response = await fetch("http://localhost:8000/logements");
      const data = await response.json();

      setData(data);
      console.log(data);
    };
    logementCard();
  }, []);

  return (
    <div>
      <HomeBanner />
      <div className="HomeContainer">
        {data.map((logement, id) => (
          <div className="HomeContainer__cards" key={id}>
            <Link to={`/logements/${logement.id}`}>
              <HomeCard cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
