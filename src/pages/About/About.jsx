import React, { useEffect, useState } from "react";
import bgabout from "../../assets/aboutbg.jpg";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  const [about, setAbout] = useState([]);

  //fetch des données depuis un json-server, les données de about on été ajoutés dans le fichier db.json
  useEffect(() => {
    const description = async () => {
      const response = await fetch("http://localhost:8000/about");
      const data = await response.json();
      setAbout(data);
    };
    description();
    document.title = "A propos"; // on affiche le titre de la page sur la fenêtre
  }, []);

  return (
    <div className="about">
      <img src={bgabout} className="about__img" alt="bannière" />
      <div className="about__infos">
        {about.map((about, i) => (
          <Collapse title={about.title} key={i}>
            {about.description}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
