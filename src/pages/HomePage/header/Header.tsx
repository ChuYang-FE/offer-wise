import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import myAvatar from "../../../images/avatar.jpg";
import OfferWiseIcon from "../../../offerWise.svg";
import type { InputChangeEvent } from "../../../types/common";
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
    <nav
      style={{
        width: "100%",
        borderBottom: "1px solid #eee",
        padding: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img
          src={OfferWiseIcon}
          alt={t("offerWise") as string}
          style={{ width: 40, height: 40, borderRadius: 8, marginRight: 8 }}
        />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          {t("goHome")}
        </a>
        <a
          onClick={() => {
            navigate("/not-found");
          }}
        >
          {t("goToNotFound")}
        </a>
        <a
          href="https://chuyang-fe.github.io/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("aboutMe")}
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <DarkModeSwitch onDarkModeChange={onDarkModeChange} />
        <LanguageSelector onLanguageChange={onLanguageChange} />
        <div style={{ marginLeft: 16, position: "relative" }}>
          <img
            src={myAvatar}
            alt="avatar"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #eee",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </nav>
  );
};
