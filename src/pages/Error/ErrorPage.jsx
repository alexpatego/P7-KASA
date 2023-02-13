import Error from "../../components/Error/Error";
import React, { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Page not found"; // on affiche un titre à la page sur la fenêtre
  });

  return (
    <>
      <Error /> {/* récupère le component Erreur */}
    </>
  );
};

export default ErrorPage;
