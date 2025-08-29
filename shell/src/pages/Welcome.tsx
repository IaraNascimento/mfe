/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useMFEContext } from "../context/MFEContext";
import { Typography } from "@mui/material";

export default function Welcome() {
  const { loadedMFEsComponents } = useMFEContext();

  const [Comp1, setComp1] = useState<any>();
  const [Comp2, setComp2] = useState<any>();
  const [Comp3, setComp3] = useState<any>();
  const [Comp4, setComp4] = useState<any>();
  const [Comp5, setComp5] = useState<any>();
  const [Comp6, setComp6] = useState<any>();
  const [Comp7, setComp7] = useState<any>();

  useEffect(() => {
    if (loadedMFEsComponents && loadedMFEsComponents["mfea"]) {
      setComp1(loadedMFEsComponents["mfea"]["app-component-1"]);
      setComp2(loadedMFEsComponents["mfea"]["app-component-2"]);
      setComp3(loadedMFEsComponents["mfea"]["app-component-3"]);
    }
    if (loadedMFEsComponents && loadedMFEsComponents["mfeb"]) {
      setComp4(loadedMFEsComponents["mfeb"]["Component1"]);
      setComp5(loadedMFEsComponents["mfeb"]["Component2"]);
    }
    if (loadedMFEsComponents && loadedMFEsComponents["mfec"]) {
      setComp6(loadedMFEsComponents["mfec"]["Component1"]);
      setComp7(loadedMFEsComponents["mfec"]["Component2"]);
    }
  }, [loadedMFEsComponents]);

  return (
    <div>
      <Typography variant="h4">Boas-vindas</Typography>
      {!!Comp1 && Comp1}
      <br />
      {!!Comp2 && Comp2}
      <br />
      {!!Comp3 && Comp3}
      <br />
      {!!Comp4 && Comp4}
      <br />
      {!!Comp5 && Comp5}
      <br />
      {!!Comp6 && Comp6}
      <br />
      {!!Comp7 && Comp7}
    </div>
  );
}
