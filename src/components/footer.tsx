import { ComponentProps, useEffect, useState } from 'react'
import { useTheme } from '../contexts/theme'
import { useSection } from '../contexts/section'

interface FooterProps extends ComponentProps<'footer'> {
  className?: string
}

export const Footer = ({ className, ...props }: FooterProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const { mode } = useTheme()
  const { sectionId } = useSection()

  useEffect(() => {
    if (sectionId === 0) {
      setIsAnimating(true)
    }
    return () => setIsAnimating(false)
  }, [sectionId])

  return (
    <footer
      {...props}
      className={`${className} ${isAnimating ? 'appearing-from-right' : ''}  ${mode === 'dark' ? 'text-[#2c2c2c]' : 'text-[#d4d4d4]'}`}
    >
      <div className="flex flex-col items-center">
        <p className="text-base tracking-tight">
          coded with passion and coffee
        </p>
        <p className="text-sm tracking-tighter">
          all content © Claudio Moura, 2024
        </p>
      </div>
    </footer>
  )
}
