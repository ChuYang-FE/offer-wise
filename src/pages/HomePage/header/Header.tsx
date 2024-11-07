import { Link, User } from "@nextui-org/react";

import myAvatar from "../../../images/avatar.jpg";
import { InputChangeEvent } from "../../../types/common";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { LanguageSelector } from "./LanguageSelector";

interface HeaderProps {
  onDarkModeChange: (event: InputChangeEvent) => void;
  onLanguageChange: (lng: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onDarkModeChange,
  onLanguageChange,
}) => {
  const { t } = useTranslation();

  const [storageLanguage] = useLocalStorageState<string>("language", {
    listenStorageChange: true,
  });

  const localizedName = storageLanguage === "zh-CN" ? "羊小羊" : "William Tan";

  return (
    <div className="flex w-full justify-between">
      <div>
        <User
          className="flex items-center justify-center"
          name={localizedName}
          description={
            <Link href="https://chuyang-fe.github.io/" size="sm" isExternal>
              {t("github")}
            </Link>
          }
          avatarProps={{
            src: myAvatar,
            isBordered: true,
            radius: "sm",
          }}
        />
      </div>
      <div className="flex items-center justify-center">
        <DarkModeSwitch onDarkModeChange={onDarkModeChange} />
        <LanguageSelector onLanguageChange={onLanguageChange} />
      </div>
    </div>
  );
};
