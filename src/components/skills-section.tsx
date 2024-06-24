import { useSection } from '../contexts/section'
import { Container } from './container'
import { IconBox } from './icon-box'
import { CSSIcon } from './icons/css-icon'
import { HTMLIcon } from './icons/html-icon'
import { JavaIcon } from './icons/java-icon'
import { JavaScriptIcon } from './icons/javascript-icon'
import { ReactIcon } from './icons/react-icon'
import { ReactQueryIcon } from './icons/react-query'
import { TailwindIcon } from './icons/tailwind-icon'
import { TypeScriptIcon } from './icons/typescript-icon'
import { PrimaryButton } from './primary-button'
import { Title } from './title'
import { repositories } from './data/repositories'
import { ExpBox } from './exp-box'
import { NextIcon } from './icons/next-icon'
import { StorybookIcon } from './icons/storybook-icon'
import { LinuxIcon } from './icons/linux-icon'
import { JestIcon } from './icons/jest-icon'
import { PostgreSQLIcon } from './icons/postgreSQL-icon'
import { SpringIcon } from './icons/spring-icon'

export const SkillsSection = () => {
  const { changeId } = useSection()
  const lanterna = repositories.find(
    (repo) => repo.title === 'Lanterna Luminosa',
  )
  const starFlix = repositories.find((repo) => repo.title === 'Starflix')

  return (
    <Container>
      <Title>Skills</Title>
      <div className="flex h-full justify-between">
        <div className="max-w-[360px] h-fit p-4 border-2 border-slate-200/10 rounded-3xl mt-16">
          <h4 className="text-2xl text-[#EFF1F5] my-2">
            Languages and Frameworks
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
              <HTMLIcon width={75} strokeColor="" strokeWidth="1.0" />
            </IconBox>
            <IconBox>
              <CSSIcon width={75} strokeColor="#EC4899" strokeWidth="1.0" />
            </IconBox>
            <IconBox>
              <ReactQueryIcon width={75} strokeColor="" />
            </IconBox>
            <IconBox>
              <JavaIcon width={75} strokeColor="" />
            </IconBox>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-fit p-4 border-2 border-slate-200/10 rounded-3xl mt-16 w-[860px]">
            <h4 className="text-2xl text-[#EFF1F5] my-2 pl-1">Experience</h4>
            <div className="flex flex-col gap-5">
              <ExpBox
                src={lanterna?.image}
                title={lanterna?.title}
                from="03/24"
                to="05/24"
                description="Open-source project using Next.js where I contributed to the
              development of the landing page by implementing user-friendly
              components, refactoring code, and fixing bugs. This experience
              boosted my skills in modern front-end development and provided
              valuable insights into best practices in web development."
              />
              <ExpBox
                src={starFlix?.image}
                title={starFlix?.title}
                from="12/24"
                to="06/24"
                description="Personal project using React.js where I created reusable 
              interactive components, set up routing with React Router DOM, 
              integrated with an API which enabled dynamic data usage, and 
              implemented local storage functionality. This project built my 
              expertise in JavaScript and React."
              />
              <span className="text-xs pl-1 text-slate-200/50">
                looking forward to add more...
              </span>
            </div>
          </div>
          <div className="h-[217px] p-4 border-2 border-slate-200/10 rounded-3xl w-[860px]">
            <h4 className="text-2xl text-[#EFF1F5] my-2 pl-1">
              Currently Learning
            </h4>
            <div className="flex flex-row p-5 gap-5 justify-between">
              <IconBox>
                <NextIcon width={65} />
              </IconBox>
              <IconBox>
                <LinuxIcon width={65} />
              </IconBox>
              <IconBox>
                <JestIcon width={65} />
              </IconBox>
              <IconBox>
                <PostgreSQLIcon width={65} />
              </IconBox>
              <IconBox>
                <SpringIcon width={65} />
              </IconBox>
              <IconBox>
                <StorybookIcon width={65} />
              </IconBox>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <PrimaryButton
            onClick={() => changeId()}
            btnTitle={''}
            className="p-5"
          />
        </div>
      </div>
    </Container>
  )
}
