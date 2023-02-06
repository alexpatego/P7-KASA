import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/Background.png";
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
      <img src={Background} alt="Background"></img>
      <h2>Chez vous, partout et ailleurs</h2>
      {/* Banner */}
      {data.map((logement, id) => (
        <div key={id}>
          <Link to={`/logements/${logement.id}`}>
            <HomeCard cover={logement.cover} title={logement.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
