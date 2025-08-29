import { createRoot } from "react-dom/client";
import { MFEProvider } from "./context/MFEContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <MFEProvider>
    <App />
  </MFEProvider>
);
