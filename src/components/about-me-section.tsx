import { Container } from './container'
import { Title } from './title'
import { useSection } from '../contexts/section'
import { PrimaryButton } from './primary-button'
import { ProfilePic } from './profile-pic'
import { useTheme } from '../contexts/theme'
import { Github, Linkedin } from 'lucide-react'

export const AboutMeSection = () => {
  const { changeId } = useSection()
  const { mode } = useTheme()
  return (
    <Container>
      <Title className="w-[180px]">About me</Title>
      <div className="flex h-[95%] justify-between">
        <div className="max-h-[800px] overflow-x-hidden overflow-y-auto mr-6 flex lg:mr-0">
          <div className="w-[90%] h-fit flex flex-col items-center p-8 mt-10 border-2 border-slate-200/10 rounded-xl justify-between lg:flex-row">
            <div className="order-0 lg:order-last">
              <ProfilePic
                photoUrl="/img/myphoto2.jpg"
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
            <div className="w-[82%] flex flex-col justify-between text-center mt-4 lg:h-[200px] lg:mt-0">
              <p
                className={`text-[#EFF1F5] text-base tracking-tighter leading-6 break-words lg:text-left lg:tracking-normal lg:leading-normal`}
              >
                Hello! {"I'm"} Claudio. {"I'm"} a Front-end Developer with
                excitement for building intuitive, efficient and visually
                appealing web interfaces. Skilled with modern technologies like
                React, {"I'm"} dedicated to crafting modern responsive user
                interfaces that significantly enhance user experience. I love
                learning new ideas, maintaining a continual pursuit of learning
                and challenging my own always looking to improve my skills.
                Additionally, I am a team player who loves contributing to
                solving problems. When {"I'm"} not coding, {"I'm"} usually
                playing games, hitting the gym, driving around or listening to
                some cool songs.
              </p>
              <div className="mt-6">
                <ul className="flex flex-col justify-between text-[#EFF1F5] gap-1 lg:flex-row">
                  <li className="text-sm lg:text-base">
                    <strong className="custom-text">Age: </strong> 19
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
                    <strong className="custom-text">Phone: </strong>+55 (21) 966
                    567 171
                  </li>
                  <li className="text-sm lg:text-base">
                    <strong className="custom-text">Address: </strong>Rio de
                    Janeiro
                  </li>
                </ul>
              </div>
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
