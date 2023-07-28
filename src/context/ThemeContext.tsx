import React, { useContext, useMemo, useState } from "react";

type UseThemeContext = {
  mode: string,
  switchTheme: (val: string) => void
};

const ThemeContext = React.createContext({
  mode: 'dark',
  switchTheme: (val: string) => {}
});

export const ThemeContextProvider: React.FC<any> = ({ children }: any) => {
  const [mode, switchTheme] = useState<string>('dark');

  const themeValue = useMemo(() => ({
    mode,
    switchTheme,
  }), [mode, switchTheme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): UseThemeContext => useContext(ThemeContext);
