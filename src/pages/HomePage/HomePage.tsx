export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center text-xl font-bold">
      {t("offerWiseDesc")}
    </div>
  );
};
