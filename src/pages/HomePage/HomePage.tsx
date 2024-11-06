import { Button } from "@nextui-org/react";

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div>
        <Button
          onClick={() => {
            navigate("/not-found");
          }}
        >
          {t("goToNotFound")}
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/about");
          }}
        >
          {t("goToAbout")}
        </Button>
      </div>
    </div>
  );
};
