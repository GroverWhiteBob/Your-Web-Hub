import { createContext, useContext, useState, type ReactNode } from "react";
import { type Theme, webLightTheme, webDarkTheme } from "@fluentui/react-components";

interface ThemeContextValue {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  setIsDark: () => {},
  theme: webLightTheme,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? webDarkTheme : webLightTheme;
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
