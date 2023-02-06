import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
