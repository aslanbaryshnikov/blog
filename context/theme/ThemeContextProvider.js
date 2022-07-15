import { useEffect, useState } from "react";
import { themes } from "../../const/theme";
import { ThemeContext } from "./ThemeContext";

const themeKey = "theme";

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newValue = theme === themes.light ? themes.dark : themes.light;
    localStorage.setItem(themeKey, newValue);
    setTheme(newValue);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const wantsDark = theme === themes.dark;
    document.body.classList.remove(wantsDark ? themes.light : themes.dark);
    document.body.classList.add(wantsDark ? themes.dark : themes.light);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
