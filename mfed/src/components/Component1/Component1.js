"use strict";

import React, { useEffect, useState } from "react";

function Component1(props) {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setIsAuthenticated(props?.auth?.isAuthenticated);
    setLoading(props.loading);
  }, [props]);

  return (
    <>
      {loading ? (
        <span>Carregando...</span>
      ) : isAuthenticated ? (
        <span>LOGADO - Componente1</span>
      ) : (
        <span>NÃO LOGADO - Componente1</span>
      )}
    </>
  );
}

export default Component1;
