import { GoToHomeButton } from "../../components";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="rounded-md">
        <h1 className="my-2">{t("notFound")}</h1>
      </div>
      <GoToHomeButton />
    </div>
  );
};
