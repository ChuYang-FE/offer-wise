import { DarkModeSwitch } from "./DarkModeSwitch";

interface HeaderProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ onChange }) => {
  return <DarkModeSwitch onChange={onChange} />;
};
