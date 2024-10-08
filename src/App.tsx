import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useHref, useNavigate } from "react-router-dom";

import { About, HomePage, NotFound } from "./pages";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <div className="flex min-h-screen flex-col bg-background text-foreground light">
        <header className="flex w-full bg-slate-300 p-2">this is header</header>
        <main className="flex grow flex-col bg-slate-400 p-2">
          <section className="bg-pink-200">
            <div>Section 1</div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </section>
          <section className="grow bg-pink-300">
            <div>Section 2</div>
          </section>
          <section className="bg-pink-400">
            <div>Section 3</div>
          </section>
        </main>
        <footer className="flex w-full bg-slate-300 p-2">this is footer</footer>
      </div>
    </NextUIProvider>
  );
}

export default App;
