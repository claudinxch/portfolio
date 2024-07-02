import { ComponentProps, useEffect, useState } from 'react'
import { useTheme } from '../contexts/theme'
import { useSection } from '../contexts/section'
import { useTranslation } from 'react-i18next'

interface FooterProps extends ComponentProps<'footer'> {
  className?: string
}

export const Footer = ({ className, ...props }: FooterProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const { mode } = useTheme()
  const { sectionId } = useSection()
  const { t } = useTranslation()

  useEffect(() => {
    if (sectionId === 0) {
      setIsAnimating(true)
    }
    return () => setIsAnimating(false)
  }, [sectionId])

  return (
    <footer
      {...props}
      className={`self-start hidden xl:block bottom-1 left-3 ${className} ${isAnimating ? 'appearing-from-right' : ''} ${mode === 'dark' ? 'text-[#2c2c2c]' : 'text-[#d4d4d4]'}`}
    >
      <div className="flex flex-col items-center">
        <p className="text-base tracking-tight">{t('footer')}</p>
        <p className="text-sm tracking-tighter">
          all content © Claudio Moura, 2024
        </p>
      </div>
    </footer>
  )
}
