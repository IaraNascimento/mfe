import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useMFEContext } from "../context/MFEContext";

export default function Menu() {
  const { loadedMFEsComponents } = useMFEContext();

  return (
    <>
      <Button color="inherit" component={Link} to="/">
        Login
      </Button>

      {(!!loadedMFEsComponents["mfea"] ||
        !!loadedMFEsComponents["mfeb"] ||
        !!loadedMFEsComponents["mfec"]) && (
        <Button color="inherit" component={Link} to="/welcome">
          Boas-vindas
        </Button>
      )}

      {!!loadedMFEsComponents["mfed"] && (
        <Button color="inherit" component={Link} to="/main">
          Principal
        </Button>
      )}
    </>
  );
}
