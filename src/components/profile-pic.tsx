import { ComponentProps } from 'react'
import { useTheme } from '../contexts/theme'

interface ProfilePicProps extends ComponentProps<'div'> {
  photoUrl: string
  className?: string
}

export const ProfilePic = ({
  className,
  photoUrl,
  ...props
}: ProfilePicProps) => {
  const { mode } = useTheme()
  return (
    <div
      {...props}
      className={`h-[200px] w-[200px] rounded-full border-2 overflow-hidden transition-colors duration-500 ${className || ''} ${mode === 'dark' ? 'border-[#212121]' : 'border-[#EBEBEB]'}`}
    >
      <img
        src={photoUrl}
        alt="Claudio Moura's photo"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
