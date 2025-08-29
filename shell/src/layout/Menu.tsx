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

      <Button color="inherit" component={Link} to="/welcome">
        Boas-vindas
      </Button>

      {/* {(loadedMFEsComponents?["mfea"] || loadedMFEsComponents?["mfe-b"] || loadedMFEsComponents?["mfe-c"]) &&
        <Button color="inherit" component={Link} to="/welcome">
          Boas-vindas
        </Button>
      }
      {loadedMFEsComponents?["mfe-d"] && (
        <Button color="inherit" component={Link} to="/main">
          Principal
        </Button>
      )} */}
    </>
  );
}
