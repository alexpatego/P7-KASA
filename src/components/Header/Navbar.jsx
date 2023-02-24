import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LOGO.png";

const Navbar = () => {
  const location = useLocation();
  // permet de reload la page si on clique sur la même section sur la laquelle on est présent
  const handleReload = (path) => {
    if (window.location.pathname === path) {
      window.location.reload();
    }
  };

  return (
    <nav className="navbar">
      <img className="navbar__img" src={logo} alt="logo" />
      <div className="navbar__links">
        <Link
          className={`navbar__links__a ${
            location.pathname === "/P7-KASA" ? "active" : "" // permet d'ajouter un style underline quand on se trouve dans une section
          }`}
          to="/"
          onClick={() => handleReload("/")}
        >
          Accueil
        </Link>
        <Link
          className={`navbar__links__a ${
            location.pathname === "/P7-KASA/a-propos" ? "active" : "" // permet d'ajouter un style underline quand on se trouve dans une section
          }`}
          to="/a-propos"
          onClick={() => handleReload("/a-propos")}
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
