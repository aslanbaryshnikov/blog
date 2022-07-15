import React, { useContext } from "react";

export const ThemeContext = React.createContext(undefined);

export function useThemeContext() {
  return useContext(ThemeContext);
}
