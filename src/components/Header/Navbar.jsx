import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__img" src={logo} alt="logo" />
      <div className="navbar__links">
        <Link className="navbar__links__a" to="/">
          Accueil
        </Link>
        <Link className="navbar__links__a" to="/a-propos">
          A Propos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
