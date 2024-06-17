import { ReactNode, createContext, useContext, useState } from 'react'

interface SectionContextInterface {
  sectionId: number
  changeId: () => void
}

interface SectionProviderProps {
  children: ReactNode
}

const initialContext: SectionContextInterface = {
  sectionId: 0,
  changeId: () => {},
}

export const SectionContext =
  createContext<SectionContextInterface>(initialContext)

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const [sectionId, setSectionId] = useState<number>(0)

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

export const useSection = (): SectionContextInterface =>
  useContext(SectionContext)
