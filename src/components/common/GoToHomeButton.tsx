import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const GoToHomeButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      {t("goHome")}
    </button>
  );
};
