import { ChevronRight } from 'lucide-react'
import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'

interface PrimaryButtonProps extends ComponentProps<'button'> {
  btnTitle: string
  className: string
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
      className={`flex items-center gap-2 rounded-full bg-opacity-[.35] border-2 border-[#E040FB] text-2xl font-inter ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#101010]' : 'text-[#101010] bg-[#EFF1F5]'} ${className || ''}`}
    >
      {btnTitle} <ChevronRight size={24} />
    </button>
  )
}
