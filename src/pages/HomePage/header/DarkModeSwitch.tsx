import { useLocalStorageState } from "ahooks";
import React from "react";

import type { InputChangeEvent } from "../../../types/common";

interface DarkModeSwitchProps {
  onDarkModeChange: (event: InputChangeEvent) => void;
}

export const DarkModeSwitch = ({ onDarkModeChange }: DarkModeSwitchProps) => {
  const [isDarkMode] = useLocalStorageState<boolean>("dark-mode");

  return <div>Dark mode switch placeholder</div>;
};
