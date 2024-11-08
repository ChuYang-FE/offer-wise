import {
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";

import myAvatar from "../../../images/avatar.jpg";
import { InputChangeEvent } from "../../../types/common";
import { UserGithubCard } from "../../About";
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

  return (
    <div className="flex w-full justify-between">
      <div>
        <Popover showArrow placement="bottom">
          <PopoverTrigger>
            <User
              className="flex items-center justify-center transition-transform"
              as="button"
              name={t("personalInfo.localizedName")}
              description={t("jobPosition.FE")}
              avatarProps={{
                src: myAvatar,
                isBordered: true,
                radius: "sm",
              }}
            />
          </PopoverTrigger>
          <PopoverContent className="p-1">
            <UserGithubCard />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center justify-center">
        <DarkModeSwitch onDarkModeChange={onDarkModeChange} />
        <LanguageSelector onLanguageChange={onLanguageChange} />
      </div>
    </div>
  );
};
