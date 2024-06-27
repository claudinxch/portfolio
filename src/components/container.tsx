import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'
import { Footer } from './footer'
import { useContactModal } from '../contexts/contact-modal'
import { ContactModal } from './contact-modal'

interface ContainerProps extends ComponentProps<'div'> {}

export const Container = ({ className, ...props }: ContainerProps) => {
  const { mode } = useTheme()
  const { isOpen } = useContactModal()

  return (
    <div
      className={`w-[calc(100% - 300px)] flex flex-col overflow-clip h-screen p-8 font-inter transition-colors duration-500 pb-4 xl:px-12 xl:pl-20  ${
        className || ''
      } ${mode === 'dark' ? 'container-dark-background' : 'container-light-background'} lg:ml-[300px]`}
    >
      {isOpen && <ContactModal />}
      <div className="flex-grow appearing-from-right">{props.children}</div>
      <Footer className={`mt-auto`} />
    </div>
  )
}
// 2c2c2c
