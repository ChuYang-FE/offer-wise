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

  return (
    <select
      style={{ width: 120, height: 32 }}
      value={storageLanguage || LANGUAGES[0].value}
      onChange={(e) => onLanguageChange(e.target.value)}
      aria-label="Language Selector"
    >
      {LANGUAGES.map((language) => (
        <option key={language.value} value={language.value}>
          {language.name}
        </option>
      ))}
    </select>
  );
};
