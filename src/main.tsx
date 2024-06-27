import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/theme.tsx'
import { SectionProvider } from './contexts/section.tsx'
import { ContactModalProvider } from './contexts/contact-modal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContactModalProvider>
        <SectionProvider>
          <App />
        </SectionProvider>
      </ContactModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
