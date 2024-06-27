import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'

interface IconBoxProps extends ComponentProps<'div'> {
  className?: string
}

export const IconBox = ({ className, children, ...props }: IconBoxProps) => {
  const { mode } = useTheme()
  return (
    <div
      {...props}
      className={`group w-28 h-28 flex items-center justify-center border-2 rounded-lg ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'} ${className || ''}`}
    >
      {children}
    </div>
  )
}
