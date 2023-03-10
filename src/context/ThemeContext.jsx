import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleIsDark = () => {
    setIsDark(!isDark);
  };

  const toggleIsFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const value = {
    isDark,
    toggleIsDark,
    toggleIsFullScreen,
    isFullScreen,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
