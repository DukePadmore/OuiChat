import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleIsDark = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleIsDark,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
