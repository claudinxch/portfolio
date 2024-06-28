import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'

interface SecondaryButtonProps extends ComponentProps<'button'> {
  btnTitle: string
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
      className={`flex items-center rounded-2xl bg-opacity-[.35] border-2 border-[#E040FB] text-2xl font-inter ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#101010]' : 'text-[#101010] bg-[#EFF1F5]'} ${className || ''}`}
    >
      {btnTitle}
    </button>
  )
}
