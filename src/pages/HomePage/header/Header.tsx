import { Card, CardHeader } from "@nextui-org/react";

import OfferWiseIcon from "../../../offerWise.svg";
import { InputChangeEvent } from "../../../types/common";
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

  return (
    <div className="flex w-full justify-between">
      <div>
        <Card>
          <CardHeader
            className="flex cursor-pointer gap-1 hover:opacity-80"
            onClick={() => navigate("/")}
          >
            <img src={OfferWiseIcon} alt="Offer Wise Icon" className="size-4" />
            <div className="flex flex-col">
              <p className="text-sm">{t("offerWise")}</p>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="flex justify-center">
        <DarkModeSwitch onDarkModeChange={onDarkModeChange} />
        <LanguageSelector onLanguageChange={onLanguageChange} />
      </div>
    </div>
  );
};
