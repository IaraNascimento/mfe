/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRoot } from "react-dom/client";
import { MFEProvider } from "./context/MFEContext.tsx";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";

(window as any).React = React;
(window as any).ReactDOM = ReactDOM;

createRoot(document.getElementById("root")!).render(
  <MFEProvider>
    <App />
  </MFEProvider>
);
