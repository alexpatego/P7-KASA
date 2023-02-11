import Error from "../../components/Error/Error";
import React, { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Page not found";
  });

  return (
    <>
      <Error />
    </>
  );
};

export default ErrorPage;
