import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      {t("aboutMe")}
    </div>
  );
};
