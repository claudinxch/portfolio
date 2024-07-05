import { ReactTyped } from 'react-typed'
import { Container } from './container'
import { Title } from './title'
import { useTheme } from '../contexts/theme'
import { useSection } from '../contexts/section'
import { PrimaryButton } from './primary-button'
import { useTranslation } from 'react-i18next'

export const HomeSection = () => {
  const { mode } = useTheme()
  const { changeId } = useSection()
  const { t, i18n } = useTranslation()

  const strings: string[] = [
    t('home_phrase1'),
    t('home_phrase2'),
    t('home_phrase3'),
    t('home_phrase4'),
  ]
  return (
    <Container className="items-center md:items-start">
      <Title>{t('home_title')}</Title>
      <div
        className={`${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'} my-16`}
      >
        <h1
          className={`mb-[5px] max-w-[200px] text-[20px] leading-tight font-inter md:text-[44px] md:max-w-[400px] lg:max-w-[1010px] lg:leading-normal ${i18n.language === 'pt' && 'lg:max-w-[1100px]'}`}
        >
          {t('home_desc1')}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Claudio Moura
          </strong>
          {t('home_desc2')}
        </h1>
        <p className="h-6 max-w-[200px] md:max-w-full">
          <ReactTyped
            strings={strings}
            typeSpeed={25}
            backSpeed={15}
            startWhenVisible={false}
            loop
            showCursor={false}
            backDelay={1000}
            className="text-xl leading-snug"
          />
        </p>
      </div>
      <PrimaryButton
        onClick={() => changeId()}
        btnTitle={t('home_button')}
        className="px-6 py-5 lg:px-28 lg:py-12"
      />
    </Container>
  )
}
