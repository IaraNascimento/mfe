"use strict";

import { createRoot } from "react-dom/client";

import { MFEProvider } from "./context/MFEContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";

(window as any).React = React;
(window as any).ReactDOM = ReactDOM;

createRoot(document.getElementById("root")!).render(
  <MFEProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </MFEProvider>
);
