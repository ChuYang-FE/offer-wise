import { Button } from "@nextui-org/react";

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
