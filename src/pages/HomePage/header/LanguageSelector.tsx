import { Select, SelectItem } from "@nextui-org/react";

interface LanguageSeletorProps {
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

const LanguageSelector = ({ onLanguageChange }: LanguageSeletorProps) => {
  const [storageLanguage] = useLocalStorageState<string | undefined>(
    "language"
  );

  return (
    <Select
      className="w-32"
      defaultSelectedKeys={[storageLanguage || LANGUAGES[0].value]}
      disabledKeys={[LANGUAGES[2].value]}
      onChange={(selected) => onLanguageChange(selected.target.value)}
      aria-label="Language Selector"
    >
      {LANGUAGES.map((language) => (
        <SelectItem key={language.value}>{language.name}</SelectItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
