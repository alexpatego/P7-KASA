import Background from "../../assets/Background.png";

const HomeBanner = () => {
  return (
    <div className="Banner">
      <img className="Banner__img" src={Background} alt="Background" />
      <h2 className="Banner__subtitle">Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default HomeBanner;
