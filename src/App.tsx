import { useEffect } from 'react'
import { Navbar } from './components/navbar'
import { Sections } from './components/sections'
import { Switch } from './components/switch'
import { useSection } from './contexts/section'
import { useTheme } from './contexts/theme'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const { sectionId } = useSection()
  const { mode } = useTheme()
  useEffect(() => {
    document.body.style.backgroundColor =
      mode === 'dark' ? '#101010' : '#EFF1F1'
  }, [mode])

  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <Sections id={sectionId} />
        <Switch />
        <Analytics />
      </div>
    </>
  )
}

export default App
