import { useSection } from '../contexts/section'
import { Container } from './container'
import { IconBox } from './icon-box'
import { CSSIcon } from './icons/css-icon'
import { HTMLIcon } from './icons/html-icon'
import { JavaIcon } from './icons/java-icon'
import { JavaScriptIcon } from './icons/javascript-icon'
import { ReactIcon } from './icons/react-icon'
import { TailwindIcon } from './icons/tailwind-icon'
import { TypeScriptIcon } from './icons/typescript-icon'
import { PrimaryButton } from './primary-button'
import { Title } from './title'
import { repositories } from './data/repositories'
import { ExpBox } from './exp-box'
import { NextIcon } from './icons/next-icon'
import { LinuxIcon } from './icons/linux-icon'
import { JestIcon } from './icons/jest-icon'
import { useTheme } from '../contexts/theme'
import { useTranslation } from 'react-i18next'
// import { StorybookIcon } from './icons/storybook-icon'
// import { PostgreSQLIcon } from './icons/postgreSQL-icon'
// import { SpringIcon } from './icons/spring-icon'

export const SkillsSection = () => {
  const { mode } = useTheme()
  const { changeId } = useSection()
  const { t, i18n } = useTranslation()
  const lanterna = repositories.find(
    (repo) => repo.title === 'Lanterna Luminosa',
  )
  const starFlix = repositories.find((repo) => repo.title === 'Starflix')

  return (
    <Container>
      <Title className={i18n.language === 'pt' ? 'w-[220px]' : ''}>
        {t('skills_title')}
      </Title>
      <div className="h-[95%] max-h-[800px] overflow-y-auto overflow-x-hidden flex justify-between flex-col 2xl:flex-row">
        <div
          className={`min-w-[70%] max-w-[90%] h-fit p-4 border-2 rounded-3xl mt-16 2xl:min-w-[360px] 2xl:max-w-[360px] ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'}`}
        >
          <h4
            className={`text-2xl text-center my-2 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
          >
            {t('skills_languages')}
          </h4>
          <div className="flex flex-wrap gap-2 gap-y-8 justify-evenly py-4">
            <IconBox>
              <JavaScriptIcon width={75} />
            </IconBox>
            <IconBox>
              <TypeScriptIcon width={75} />
            </IconBox>
            <IconBox>
              <ReactIcon width={75} />
            </IconBox>
            <IconBox>
              <TailwindIcon width={75} />
            </IconBox>
            <IconBox>
              <NextIcon width={75} strokeColor="" />
            </IconBox>
            <IconBox>
              <HTMLIcon width={75} strokeColor="" strokeWidth="1.0" />
            </IconBox>
            <IconBox>
              <CSSIcon width={75} strokeColor="#EC4899" strokeWidth="1.0" />
            </IconBox>
            {/* <IconBox>
              <ReactQueryIcon width={75} strokeColor="" />
            </IconBox> */}
            <IconBox>
              <JavaIcon width={75} strokeColor="" />
            </IconBox>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div
            className={`h-fit min-w-[70%] max-w-[90%] p-4 border-2 rounded-3xl mt-16 2xl:min-w-[860px] 2xl:w-[860px] ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'}`}
          >
            <h4
              className={`text-2xl my-2 pl-1 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
            >
              {t('skills_exp')}
            </h4>
            <div className="flex flex-col gap-5">
              <ExpBox
                src={lanterna?.image}
                alt={lanterna?.imageAlt}
                title={lanterna?.title}
                from="03/24"
                to="05/24"
                description={t('skills_exp_desc1')}
              />
              <ExpBox
                src={starFlix?.image}
                alt={starFlix?.imageAlt}
                title={starFlix?.title}
                from="12/24"
                to="06/24"
                description={t('skills_exp_desc2')}
              />
              <span
                className={`text-xs self-end pl-1 ${mode === 'dark' ? 'text-slate-200/50' : 'text-slate-400'}`}
              >
                {t('skills_message')}
              </span>
            </div>
          </div>
          <div
            className={`min-w-[70%] max-w-[90%] p-4 border-2 rounded-3xl w-fit sm:min-w-fit sm:h-[217px] ${mode === 'dark' ? 'border-slate-200/5' : 'border-[#D4D4D4]'}`}
          >
            {/* w-[860px] */}
            <h4
              className={`text-2xl my-2 pl-1 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
            >
              {t('skills_learning')}
            </h4>
            <div className="flex flex-row flex-wrap justify-center p-5 gap-5 sm:justify-normal ">
              <IconBox>
                <JestIcon width={65} />
              </IconBox>
              <IconBox>
                <LinuxIcon width={65} />
              </IconBox>
              {/* <IconBox>
                <PostgreSQLIcon width={65} />
              </IconBox>
              <IconBox>
                <SpringIcon width={65} />
              </IconBox>
              <IconBox>
                <StorybookIcon width={65} />
              </IconBox> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 2xl:mt-0">
          <PrimaryButton onClick={() => changeId()} className="p-5" />
        </div>
      </div>
    </Container>
  )
}
