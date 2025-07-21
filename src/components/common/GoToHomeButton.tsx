import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const GoToHomeButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
    >
      {t("goHome")}
    </Button>
  );
};
