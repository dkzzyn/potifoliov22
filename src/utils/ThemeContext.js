// src/ThemeContext.js
import { createContext, useContext, useState } from 'react'
import { lightTheme, darkTheme } from './Themes' 

export const ThemeContext = createContext()

export const ThemeProviderCustom = ({ children }) => {
  const [themeMode, setThemeMode] = useState('dark')

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const theme = themeMode === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ themeMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
