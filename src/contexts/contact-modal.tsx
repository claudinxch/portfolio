import { ReactNode, createContext, useContext, useState } from 'react'

interface ContactModalContextInterface {
  isOpen: boolean
  handleModalState: (state: boolean) => void
}

interface ContactModalProviderProps {
  children: ReactNode
}

const initialContext: ContactModalContextInterface = {
  isOpen: false,
  handleModalState: () => {},
}

export const ContactModalContext =
  createContext<ContactModalContextInterface>(initialContext)

export const ContactModalProvider = ({
  children,
}: ContactModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleModalState = (state: boolean) => {
    setIsOpen(state)
  }

  return (
    <ContactModalContext.Provider value={{ isOpen, handleModalState }}>
      {children}
    </ContactModalContext.Provider>
  )
}
export const useContactModal = (): ContactModalContextInterface =>
  useContext(ContactModalContext)
