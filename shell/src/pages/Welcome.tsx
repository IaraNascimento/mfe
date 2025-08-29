/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useMFEContext } from "../context/MFEContext";
import { Typography } from "@mui/material";

export default function Welcome() {
  const { loadedMFEsComponents } = useMFEContext();

  const [Comp1, setComp1] = useState<any>();
  const [Comp2, setComp2] = useState<any>();
  const [Comp3, setComp3] = useState<any>();

  useEffect(() => {
    console.log({ loadedMFEsComponents });
    if (loadedMFEsComponents && loadedMFEsComponents["mfea"].length) {
      setComp1(loadedMFEsComponents["mfea"][0]);
      setComp2(loadedMFEsComponents["mfea"][1]);
      setComp3(loadedMFEsComponents["mfea"][2]);
    }
  }, [loadedMFEsComponents]);

  return (
    <div>
      <Typography variant="h4">Boas-vindas</Typography>
      {Comp1 && <Comp1 />}
      {Comp2 && <Comp2 />}
      {Comp3 && <Comp3 />}
    </div>
  );
}
