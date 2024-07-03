import { Navbar } from './components/navbar'
import { Sections } from './components/sections'
import { Switch } from './components/switch'
import { useSection } from './contexts/section'

function App() {
  const { sectionId } = useSection()

  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <Sections id={sectionId} />
        <Switch />
      </div>
    </>
  )
}

export default App
