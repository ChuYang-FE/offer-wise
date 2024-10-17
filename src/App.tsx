import { Button, NextUIProvider } from "@nextui-org/react";

import { About, HomePage, NotFound } from "./pages";
import { Header } from "./pages/HomePage/header";

function App() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const changeLanguage = (lng: string) => {
    console.log("changeLanguage to", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <div
        className={`flex min-h-screen flex-col bg-background text-foreground ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <header className="flex w-full justify-between bg-slate-300 p-2">
          <div>Offer Wise</div>
          <Header
            onChange={(event) => {
              setIsDarkMode(event.target.checked);
            }}
          />
          <Button onClick={() => changeLanguage("en")}>Eng</Button>
          <Button onClick={() => changeLanguage("fr")}>Franch</Button>
        </header>
        <main className="flex grow flex-col bg-slate-400 p-2">
          <section className="bg-pink-200">
            <h1>{t("Welcome to React")}</h1>
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
