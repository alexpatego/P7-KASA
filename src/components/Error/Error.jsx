import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      {/* renvoie un lien vers la page d'accueil */}
      <Link className="error__redirect" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
