// theme.tsx
import { useState, createContext, ReactNode, useContext } from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  mode: ThemeMode
  toggleMode: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const initialContext: ThemeContextType = {
  mode: 'dark',
  toggleMode: () => {},
}

export const ThemeContext = createContext<ThemeContextType>(initialContext)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>('dark')

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
