import { Container } from './container'
import { Title } from './title'
import { useSection } from '../contexts/section'
import { PrimaryButton } from './primary-button'
import { ProfilePic } from './profile-pic'
import { useTheme } from '../contexts/theme'
import { Briefcase, Code, Github, Linkedin } from 'lucide-react'
import { useContactModal } from '../contexts/contact-modal'
import { SecondaryButton } from './secondary-button'
import { useTranslation } from 'react-i18next'

export const AboutMeSection = () => {
  const { changeId } = useSection()
  const { mode } = useTheme()
  const { handleModalState } = useContactModal()
  const {
    t,
    i18n: { language },
  } = useTranslation()

  // Gets age by calculating the difference in milliseconds between today and my birthday
  // and dividing by 365
  const getAge = () => {
    const now = new Date()
    const birthDay = new Date(2004, 9, 9)
    const diffTime = Math.abs(Number(now) - Number(birthDay))
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))

    return diffYears
  }

  return (
    <Container>
      <Title className={language === 'en' ? 'w-[180px]' : 'w-[195px]'}>
        {t('about_me_title')}
      </Title>
      <div className="flex flex-col items-center md:flex-row md:h-[95%]">
        <div className="max-h-[800px] w-[90%] pr-1 overflow-x-hidden overflow-y-auto flex flex-col xl:pr-[80px] xl:w-full">
          <div
            className={`w-full h-fit flex flex-col items-center p-8 mt-10 border-2 rounded-xl justify-between ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'} 2xl:flex-row 2xl:h-[1030px]`}
          >
            <div className="order-0 2xl:order-last">
              <ProfilePic
                photoUrl="/img/myphoto.jpeg"
                className="flex-none h-[160px] w-[160px] rounded-lg"
              />
              <div className="flex mt-4 gap-6 justify-center">
                <a
                  href="https://github.com/claudinxch"
                  target="_blank"
                  rel="noreferrer"
                  className={`border-2 rounded-lg py-2 px-5 transition duration-300 ${mode === 'dark' ? 'border-[#EBEBEB] text-[#EFF1F5] dark-button-hover' : 'border-[#212121] text-[#101010] light-button-hover'}`}
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/claudio-s-moura/"
                  target="_blank"
                  rel="noreferrer"
                  className={`border-2 rounded-lg py-2 px-5 transition duration-300 ${mode === 'dark' ? 'border-[#EBEBEB] text-[#EFF1F5] dark-button-hover' : 'border-[#212121] text-[#101010] light-button-hover'}`}
                >
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="w-[82%] flex flex-col justify-between text-center mt-4 2xl:h-[200px] 2xl:mt-0">
              <p
                className={`text-base tracking-tighter leading-6 break-words ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'} lg:text-left lg:tracking-normal lg:leading-normal`}
              >
                {t('about_me_resume')}
              </p>
              <div className="mt-6">
                <ul
                  className={`flex flex-col justify-between gap-1 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'} 2xl:flex-row`}
                >
                  <li className="text-sm lg:text-base">
                    <strong className="custom-text">
                      {language === 'en' ? 'Age' : 'Idade'}:{' '}
                    </strong>{' '}
                    {getAge()}
                  </li>
                  <li className="text-sm lg:text-base">
                    <strong className="custom-text">Email: </strong>
                    <a
                      href="mailto:claudiohenrique0909@gmail.com"
                      className="transition-colors duration-200 hover:text-[#707070]"
                    >
                      claudiohenrique0909@gmail.com
                    </a>
                  </li>
                  <li className="text-sm lg:text-base">
                    <strong className="custom-text">
                      {language === 'en' ? 'Phone' : 'Telefone'}:{' '}
                    </strong>
                    +55 (21) {t('tel')}
                  </li>
                  <li className="text-sm lg:text-base">
                    <strong className="custom-text">
                      {language === 'en' ? 'Address' : 'Endereço'}:{' '}
                    </strong>
                    Rio de Janeiro
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 flex flex-col justify-between items-center gap-4 lg:flex-row">
            <div
              className={`w-fit h-[190px] p-4 flex flex-col items-center justify-center text-center gap-3 border-2 rounded-xl ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'} md:w-[600px]`}
            >
              <Code size={36} color="#E040FB" />
              <p
                className={`text-lg ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
              >
                {t('about_me_card1_title')}
              </p>
              <p
                className={`text-base ${mode === 'dark' ? 'text-slate-200/50' : 'text-slate-500'}`}
              >
                {t('about_me_card1_desc')}
              </p>
            </div>
            <div
              className={`w-fit h-[190px] p-4 flex flex-col items-center justify-center text-center gap-3 border-2 rounded-xl ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'} md:w-[600px]`}
            >
              <Briefcase size={36} color="#E040FB" />
              <p
                className={`text-lg ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
              >
                {t('about_me_card2_title')}
              </p>
              <p
                className={`text-base ${mode === 'dark' ? 'text-slate-200/50' : 'text-slate-500'}`}
              >
                {t('about_me_card2_desc')}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <SecondaryButton
              onClick={() => handleModalState(true)}
              btnTitle={t('hire')}
              className="px-6 py-5 lg:w-[249px] lg:h-[92px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <PrimaryButton onClick={() => changeId()} className="p-5" />
        </div>
      </div>
    </Container>
  )
}
