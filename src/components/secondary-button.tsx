import { ComponentProps, ReactNode } from 'react'
import { useTheme } from '../contexts/theme'

interface SecondaryButtonProps extends ComponentProps<'button'> {
  btnTitle: ReactNode
  className?: string
}

export const SecondaryButton = ({
  btnTitle,
  className,
  ...props
}: SecondaryButtonProps) => {
  const { mode } = useTheme()
  return (
    <button
      {...props}
      className={`flex items-center justify-center rounded-2xl bg-opacity-[.35] border-2 border-[#E040FB] transition-colors duration-300 text-2xl font-inter ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#101010] hover:bg-[#3B3B3B]/10' : 'text-[#101010] bg-[#EFF1F5] hover:bg-[#3B3B3B]/5'} hover:bg-[#707070]/5 ${className || ''}`}
    >
      {btnTitle}
    </button>
  )
}
