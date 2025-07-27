import { useLocalStorageState } from "ahooks";

interface LanguageSelectorProps {
  onLanguageChange: (lng: string) => void;
}

const LANGUAGES = [
  {
    value: "zh-CN",
    name: "🇨🇳 简体中文",
  },
  {
    value: "en-US",
    name: "🇺🇸 English",
  },
  {
    value: "es-ES",
    name: "🇪🇸 Español",
  },
];

export const LanguageSelector = ({
  onLanguageChange,
}: LanguageSelectorProps) => {
  const [storageLanguage] = useLocalStorageState<string>("language");
  console.log(storageLanguage);

  return <div>this is LanguageSelector</div>;
};
