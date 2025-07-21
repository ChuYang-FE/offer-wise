import { useLocalStorageState } from "ahooks";
import React from "react";

import type { InputChangeEvent } from "../../../types/common";

interface DarkModeSwitchProps {
  onDarkModeChange: (event: InputChangeEvent) => void;
}

export const DarkModeSwitch = ({ onDarkModeChange }: DarkModeSwitchProps) => {
  const [isDarkMode] = useLocalStorageState<boolean>("dark-mode");

  return (
    <input
      type="checkbox"
      checked={isDarkMode || false}
      onChange={onDarkModeChange}
      style={{ width: 40, height: 24 }}
      aria-label="Dark mode switch"
    />
  );
};
