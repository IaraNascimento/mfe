/* eslint-disable @typescript-eslint/no-explicit-any */

"use strict";

import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useMFEContext } from "../context/MFEContext";

export default function Main() {
  const { loadedMFEsComponents } = useMFEContext();

  const [Comp1, setComp1] = useState<any>();
  const [Comp2, setComp2] = useState<any>();

  useEffect(() => {
    if (loadedMFEsComponents && loadedMFEsComponents["mfed"]) {
      setComp1(loadedMFEsComponents["mfed"]["Component1"]);
      setComp2(loadedMFEsComponents["mfed"]["Component2"]);
    }
  }, [loadedMFEsComponents]);
  return (
    <div>
      <Typography variant="h4">Tela Principal</Typography>
      {!!Comp1 && Comp1}
      <br />
      {!!Comp2 && Comp2}
    </div>
  );
}
