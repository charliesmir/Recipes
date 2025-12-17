import React, { type PropsWithChildren, createContext } from "react";
import theme from "./theme";

export const ThemeContext = createContext(theme);

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
