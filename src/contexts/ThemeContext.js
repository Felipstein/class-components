import React, { createContext, useState  } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }
  
  function handleSetPurpleTheme() {
    setTheme('purple');
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, handleSetPurpleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}