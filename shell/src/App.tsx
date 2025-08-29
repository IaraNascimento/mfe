import { useEffect } from "react";
import AppRouter from "./Router";
import { useMFEContext, type MFEConfig } from "./context/MFEContext";
import mfeList from "./mfe.config.json";

export default function App() {
  const { loadMFE } = useMFEContext();

  useEffect(() => {
    mfeList.forEach((mfe: MFEConfig) => {
      loadMFE(mfe);
    });
  }, []);

  return <AppRouter />;
}
