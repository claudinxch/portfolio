import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'
import { Footer } from './footer'
import { useContactModal } from '../contexts/contact-modal'
import { ContactModal } from './contact-modal'
import { FollowMeBox } from './follow-me-box'

interface ContainerProps extends ComponentProps<'div'> {}

export const Container = ({ className, ...props }: ContainerProps) => {
  const { mode } = useTheme()
  const { isOpen } = useContactModal()

  return (
    <section
      className={`w-[calc(100% - 300px)] relative flex flex-col overflow-clip h-screen p-3 font-inter transition-colors duration-500 lg:pb-4 lg:p-8 xl:px-12 xl:pl-20  ${
        className || ''
      } ${mode === 'dark' ? 'container-dark-background' : 'container-light-background'} lg:ml-[300px]`}
    >
      {isOpen && <ContactModal />}
      <div className="flex-grow appearing-from-right">{props.children}</div>
      <FollowMeBox />
      <Footer className={`mt-auto`} />
    </section>
  )
}
// 2c2c2c
