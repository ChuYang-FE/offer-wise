import { Avatar, Chip, NextUIProvider } from "@nextui-org/react";
import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useHref, useNavigate } from "react-router-dom";

import { About, HomePage, NotFound } from "./pages";
import { Header } from "./pages/HomePage/header";
import { InputChangeEvent } from "./types/common";

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
    setIsDarkMode(event.target.checked);
  };

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <div
        className={`${
          isDarkMode ? "dark" : "light"
        } flex min-h-screen flex-col bg-background text-foreground`}
      >
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
          <section className="grow"></section>
        </main>
        <footer className="flex w-full justify-center p-2">
          <Chip
            variant="flat"
            avatar={
              <Avatar
                name={t("personalInfo.localizedName")}
                size="sm"
                getInitials={(name) => name.charAt(0)}
              />
            }
          >
            {t("personalInfo.localizedName")}
          </Chip>
        </footer>
      </div>
    </NextUIProvider>
  );
}

export default App;
