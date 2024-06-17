import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'

interface ContainerProps extends ComponentProps<'div'> {}

export const Container = ({ className, ...props }: ContainerProps) => {
  const { mode } = useTheme()

  return (
    <div
      className={`w-[calc(100% - 300px)] overflow-hidden h-screen p-8 font-inter transition-colors duration-500 xl:px-12 xl:pl-20 xl:py-12 ${
        className || ''
      } ${mode === 'dark' ? 'container-dark-background text-[#EFF1F5]' : 'container-light-background text-[#101010]'} sm:ml-[300px]`}
    >
      <div className="appearing-from-right">{props.children}</div>
    </div>
  )
}
