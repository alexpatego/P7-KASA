import React, { useEffect, useState } from "react";
import bgabout from "../../assets/aboutbg.jpg";
import AboutCard from "../../components/AboutCard/AboutCard";

const About = () => {
  const [about, setAbout] = useState([]);

  const description = async () => {
    const response = await fetch("http://localhost:8000/about");
    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => {
    description();
  }, []);

  return (
    <div>
      <img src={bgabout} className="imgbanner" alt="bannière" />
      <div className="AboutPage">
        {about.map((about) => (
          <AboutCard about={about} />
        ))}
      </div>
    </div>
  );
};

export default About;
