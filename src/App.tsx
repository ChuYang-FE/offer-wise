import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useNavigate } from "react-router-dom";

import { About, HomePage, NotFound } from "./pages";
import { Header } from "./pages/HomePage/header";
import type { InputChangeEvent } from "./types/common";

function App() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    "dark-mode",
    {
      defaultValue: false,
    }
  );

  const [storageLanguage, setStorageLanguage] =
    useLocalStorageState<string>("language");

  useEffect(() => {
    i18n.changeLanguage(storageLanguage);
  }, [i18n, storageLanguage]);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setStorageLanguage(lng);
  };

  const handleDarkModeChange = (event: InputChangeEvent) => {
    console.log("event", event.target.checked);
    setIsDarkMode(event.target.checked);
  };

  return (
    <div>
      <header>
        <Header
          onDarkModeChange={handleDarkModeChange}
          onLanguageChange={handleLanguageChange}
        />
      </header>
      <main className="flex grow flex-col p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
