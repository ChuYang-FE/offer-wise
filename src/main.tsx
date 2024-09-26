import "./index.css";

import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <main className="bg-background text-foreground light">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
