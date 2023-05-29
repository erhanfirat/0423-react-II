import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const themeInitial = localStorage.getItem("theme");
    if (themeInitial) {
      return themeInitial;
    } else {
      return "light";
    }
  });

  const contextState = {
    theme,
    setTheme,
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextState}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
