import { Select, SelectItem } from "@nextui-org/react";

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
