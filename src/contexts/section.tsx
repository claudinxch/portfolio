import { ReactNode, createContext, useContext, useState } from 'react'

interface SectionContext {
  sectionId: number
  changeId: (newId?: number) => void
}

interface SectionProviderProps {
  children: ReactNode
}

const initialContext: SectionContext = {
  sectionId: 0,
  changeId: () => {},
}

export const SectionContext = createContext<SectionContext>(initialContext)

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const [sectionId, setSectionId] = useState(0)

  const changeId = (newId?: number) => {
    if (newId !== undefined) {
      setSectionId(newId)
    } else {
      setSectionId((prev) => (prev === 3 ? 0 : prev + 1))
    }
  }

  return (
    <SectionContext.Provider value={{ sectionId, changeId }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = (): SectionContext => useContext(SectionContext)
