import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/theme.tsx'
import { SectionProvider } from './contexts/section.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SectionProvider>
        <App />
      </SectionProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
