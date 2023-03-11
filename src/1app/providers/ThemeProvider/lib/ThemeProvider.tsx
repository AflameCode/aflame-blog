import { ReactElement, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../ui/ThemeContext";

export interface ThemeProviderProps {
  children: ReactElement;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const defaultTheme =  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const initialTheme = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
