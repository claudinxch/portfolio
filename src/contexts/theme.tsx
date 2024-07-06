// theme.tsx
import { useState, createContext, ReactNode, useContext } from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeContext {
  mode: ThemeMode
  toggleMode: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const initialContext: ThemeContext = {
  mode: 'dark',
  toggleMode: () => {},
}

export const ThemeContext = createContext<ThemeContext>(initialContext)

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

export const useTheme = (): ThemeContext => useContext(ThemeContext)
