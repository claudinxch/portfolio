import { ComponentProps } from 'react'

interface IconBoxProps extends ComponentProps<'div'> {
  className?: string
}

export const IconBox = ({ className, children, ...props }: IconBoxProps) => {
  return (
    <div
      {...props}
      className={`group w-28 h-28 flex items-center justify-center border-2 border-slate-200/5 rounded-lg ${className || ''}`}
    >
      {children}
    </div>
  )
}
