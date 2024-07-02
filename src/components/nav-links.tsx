import { ComponentProps } from 'react'
import { useSection } from '../contexts/section'
import { useTranslation } from 'react-i18next'

interface NavLinksInterface extends ComponentProps<'div'> {
  className?: string
}

export const NavLinks = ({ className, ...props }: NavLinksInterface) => {
  const { changeId } = useSection()
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }
  return (
    <div
      {...props}
      className={`flex flex-col justify-between h-56 text-xl font-medium py-4 w-full ${className || ''}`}
    >
      <span
        onClick={() => changeId(0)}
        className="w-2/3 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        {t('home_title')}
      </span>
      <span
        onClick={() => changeId(1)}
        className="w-2/3 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        {t('projects_title')}
      </span>
      <span
        onClick={() => changeId(2)}
        className="w-2/3 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        {t('skills_title')}
      </span>
      <span
        onClick={() => changeId(3)}
        className="w-2/3 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        {t('about_me_title')}
      </span>
      <button className="bg-white text-black" onClick={handleChangeLanguage}>
        change lang
      </button>
    </div>
  )
}
