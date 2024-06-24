import { ComponentProps } from 'react'

interface IconBoxProps extends ComponentProps<'div'> {}

export const IconBox = ({ children, ...props }: IconBoxProps) => {
  return (
    <div
      {...props}
      className="w-28 h-28 flex items-center justify-center border-2 border-slate-200/5 rounded-lg"
    >
      {children}
    </div>
  )
}
