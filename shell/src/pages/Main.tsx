/* eslint-disable @typescript-eslint/no-explicit-any */

"use strict";

import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useMFEContext } from "../context/MFEContext";
import { useAuth } from "../context/AuthContext";

export default function Main() {
  const { loadedMFEsComponents } = useMFEContext();
  const { isAuthenticated, loading } = useAuth();

  const [Comp1, setComp1] = useState<any>();
  const [Comp2, setComp2] = useState<any>();

  const [props, setProps] = useState<any>();

  useEffect(() => {
    if (loadedMFEsComponents && loadedMFEsComponents["mfed"]) {
      setComp1(loadedMFEsComponents["mfed"]["Component1"]);
      setComp2(loadedMFEsComponents["mfed"]["Component2"]);
    }
  }, [loadedMFEsComponents]);

  useEffect(() => {
    setProps({ loading, auth: { isAuthenticated } });
  }, [loading, isAuthenticated]);

  return (
    <div>
      <Typography variant="h4">Tela Principal</Typography>
      <br />
      {!!Comp1 && <Comp1 {...props} />}
      <br />
      {!!Comp2 && <Comp2 {...props} />}
    </div>
  );
}
