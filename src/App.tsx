import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useHref, useNavigate } from "react-router-dom";

import { About, HomePage, NotFound } from "./pages";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <main className="bg-background text-foreground light">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </main>
    </NextUIProvider>
  );
}

export default App;
