import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";

import myAvatar from "../../../images/avatar.jpg";
import OfferWiseIcon from "../../../offerWise.svg";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar
      maxWidth="full"
      className=""
      isBordered
      onClick={() => navigate("/")}
      // isMenuOpen={isMenuOpen}
      // onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:flex" justify="start">
        <NavbarBrand>
          <Avatar
            className="cursor-pointer gap-1 hover:opacity-80"
            src={OfferWiseIcon}
            size="md"
            radius="sm"
            isBordered
            alt={t("offerWise")}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link isBlock color="foreground" href="/">
            {t("goHome")}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/not-found"}>
          <Link isBlock color="foreground" href="/not-found">
            {t("goToNotFound")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            isBlock
            isExternal
            showAnchorIcon
            href="https://chuyang-fe.github.io/about/"
          >
            {t("aboutMe")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center justify-center">
          <DarkModeSwitch onDarkModeChange={onDarkModeChange} />
          <LanguageSelector onLanguageChange={onLanguageChange} />
        </NavbarItem>
        <NavbarItem>
          <Popover showArrow placement="bottom-end">
            <PopoverTrigger>
              <User
                className="flex items-center justify-center transition-transform"
                as="button"
                name=""
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
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
