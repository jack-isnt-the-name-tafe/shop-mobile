import React, { createContext, useState, useContext } from "react";
import lightTheme from "../themes/lightTheme.json";
import darkTheme from "../themes/darkTheme.json";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Create a state called 'isDarkTheme' and set its value to false.
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // toggleTheme when called, inverts the value of isDarkTheme.
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);