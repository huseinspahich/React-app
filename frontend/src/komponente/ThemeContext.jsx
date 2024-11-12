import React, { createContext, useState, useContext, useEffect } from 'react';

// Kreiramo ThemeContext
const ThemeContext = createContext();

// Hook za pristup temi
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider komponenta koja omogućava promjenu teme
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Funkcija za prebacivanje između tamne i svijetle teme
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  // Primjena odgovarajuće klase na body element za tamnu ili svijetlu temu
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
