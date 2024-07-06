import { ReactNode, createContext, useContext, useState } from 'react'

interface ContactModalContext {
  isOpen: boolean
  handleModalState: (state: boolean) => void
}

interface ContactModalProviderProps {
  children: ReactNode
}

const initialContext: ContactModalContext = {
  isOpen: false,
  handleModalState: () => {},
}

export const ContactModalContext =
  createContext<ContactModalContext>(initialContext)

export const ContactModalProvider = ({
  children,
}: ContactModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModalState = (state: boolean) => {
    setIsOpen(state)
  }

  return (
    <ContactModalContext.Provider value={{ isOpen, handleModalState }}>
      {children}
    </ContactModalContext.Provider>
  )
}
export const useContactModal = (): ContactModalContext =>
  useContext(ContactModalContext)
