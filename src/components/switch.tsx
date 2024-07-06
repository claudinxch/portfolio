import { useEffect, useState } from 'react'
import { useTheme } from '../contexts/theme'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'
import { useSection } from '../contexts/section'

export const Switch = () => {
  const lang = navigator.language
  const isPortuguese = lang === 'pt-BR' || lang === 'pt' || lang === 'pt-PT'

  const [isActive, setIsActive] = useState(isPortuguese)
  const [isAnimating, setIsAnimating] = useState(false)
  const { mode } = useTheme()
  const { sectionId } = useSection()
  const { i18n } = useTranslation()

  const handleChangeLanguage = () => {
    const lang = isActive ? 'en' : 'pt'
    i18n.changeLanguage(lang)
    setIsActive((prev) => !prev)
  }

  useEffect(() => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 1300)
  }, [sectionId])

  return (
    <div
      className={`absolute top-8 right-12 ${isAnimating && 'appearing-from-right'}`}
    >
      <div
        className={twMerge(
          `relative w-16 h-[30px] rounded-3xl flex items-center justify-center cursor-pointer caret-transparent border-[1px]`,
          mode === 'dark'
            ? 'bg-[#121212] border-[#181818]'
            : 'bg-[#EFF1F5] border-[#CDD0D3]',
        )}
        onClick={handleChangeLanguage}
      >
        <div
          className={twMerge(
            `rounded-full w-7 h-7 bg-cover bg-center absolute transition-transform duration-300`,
            isActive
              ? 'bg-bra-image translate-x-4'
              : 'bg-usa-image -translate-x-4',
          )}
        ></div>
      </div>
    </div>
  )
}
