import React from "react";

export enum themeType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export type ThemeContextType = {
  theme: themeType;
  setAppTheme: (theme: themeType) => void;
};

export const ThemeContext = React.createContext({
  theme: themeType.DARK,
  setAppTheme: (theme: themeType) => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, settheme] = React.useState<themeType>(themeType.LIGHT);

  const setAppTheme = (theme: themeType): void => {
    console.log(theme);
    if (theme === themeType.DARK) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      settheme(themeType.DARK);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      settheme(themeType.LIGHT);
    }
  };

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      settheme(themeType.DARK);
    } else {
      document.documentElement.classList.remove("dark");
      settheme(themeType.LIGHT);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
