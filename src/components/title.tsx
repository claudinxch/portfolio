import { ComponentProps } from 'react'

interface TitleProps extends ComponentProps<'h2'> {}
// from-[#8F3FFF] to-[#E040FB] via-[#9C27B0]
export const Title = ({ className, ...props }: TitleProps) => {
  return (
    <h2
      {...props}
      className={`text-4xl font-bold border-b-2 border-[#E040FB] w-[120px] opacity-[.85] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 border-opacity-[.7] ${className || ''}`}
    >
      {props.children}
    </h2>
  )
}
