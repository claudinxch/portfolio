import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/theme'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const ModeButton = () => {
  const { mode, toggleMode } = useTheme()
  const { t, i18n } = useTranslation()
  const icon = mode === 'dark' ? <Sun color="#EFF1F5" /> : <Moon />
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1000) // Duration of the animation
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const handleClick = () => {
    toggleMode()
    setIsAnimating(true)
  }

  return (
    <button
      className={`self-end p-2 transition-transform ${isAnimating ? 'animate-[rotate_1s_ease-in-out]' : ''}`}
      title={t('mode_button', {
        mode:
          mode === 'light'
            ? i18n.language === 'en'
              ? 'dark'
              : 'escuro'
            : i18n.language === 'en'
              ? 'light'
              : 'claro',
      })}
      onClick={handleClick}
    >
      {icon}
    </button>
  )
}
