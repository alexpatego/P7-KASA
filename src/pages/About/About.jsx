import React, { useEffect, useState } from "react";
import bgabout from "../../assets/aboutbg.jpg";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  const [about, setAbout] = useState([]);

  const description = async () => {
    const response = await fetch("http://localhost:8000/about");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    description();
    document.title = "A propos";
  }, []);

  return (
    <div className="about">
      <img src={bgabout} className="about__img" alt="bannière" />
      <div className="about__infos">
        {about.map((about) => (
          <Collapse title={about.title}>{about.description}</Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
