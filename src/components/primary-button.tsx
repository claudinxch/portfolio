import { ChevronRight } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'
import { useTheme } from '../contexts/theme'

interface PrimaryButtonProps extends ComponentProps<'button'> {
  btnTitle?: ReactNode
  className?: string
}

export const PrimaryButton = ({
  btnTitle,
  className,
  ...props
}: PrimaryButtonProps) => {
  const { mode } = useTheme()

  return (
    <button
      {...props}
      className={`flex items-center gap-2 rounded-full bg-opacity-[.35] border-2 transition-colors duration-300 border-[#E040FB] text-2xl font-inter ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#101010] hover:bg-[#3B3B3B]/10' : 'text-[#101010] bg-[#EFF1F5] hover:bg-[#3B3B3B]/5'} ${className || ''}`}
    >
      {btnTitle} <ChevronRight size={24} />
    </button>
  )
}
