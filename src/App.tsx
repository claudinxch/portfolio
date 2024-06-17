import { Navbar } from './components/navbar'
import { Sections } from './components/sections'
import { useSection } from './contexts/section'

function App() {
  const { sectionId } = useSection()
  return (
    <>
      <Navbar />
      <Sections id={sectionId} />
    </>
  )
}

export default App
