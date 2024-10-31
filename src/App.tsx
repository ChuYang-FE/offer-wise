import { NextUIProvider } from "@nextui-org/react";

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
  }, []);

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
        <header className="flex w-full justify-between bg-slate-300 p-2">
          <Header
            onDarkModeChange={handleDarkModeChange}
            onLanguageChange={handleLanguageChange}
          />
        </header>
        <main className="flex grow flex-col p-2">
          <section className="">
            <div className="flex h-8 justify-center align-middle">
              {t("offerWiseDesc")}
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </section>
          <section className="grow"></section>
          <section className=""></section>
        </main>
        <footer className="flex w-full justify-center p-2">
          this is footer
        </footer>
      </div>
    </NextUIProvider>
  );
}

export default App;
