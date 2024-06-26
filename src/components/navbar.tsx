import { ModeButton } from './mode-button'
import { Github, Linkedin } from 'lucide-react'
import { useTheme } from '../contexts/theme'
import { NavLinks } from './nav-links'
import { ProfilePic } from './profile-pic'
// CCD0DA
export const Navbar = () => {
  const { mode } = useTheme()
  return (
    <aside
      className={`fixed hidden flex-col sm:flex w-[300px] h-svh font-inter shadow-xl  border-r-[1px] transition-colors duration-500
      ${mode === 'dark' ? 'bg-[#121212] text-[#EFF1F5] border-r-[#212121] shadow-neutral-900' : 'bg-[#EFF1F5] text-[#101010] border-r-[#EBEBEB]'}`}
    >
      <ModeButton />
      <div className="flex flex-col mx-auto items-start justify-between h-full py-4 appearing">
        <div className="flex flex-col mx-auto items-center">
          <ProfilePic />
          <strong className="text-2xl mt-1">Claudio Moura</strong>
          <p className="text-lg font-medium">Software Engineer</p>
          <div className="flex mt-2 gap-6">
            <a
              href="https://github.com/claudinxch"
              target="_blank"
              rel="noreferrer"
              className={`border-2 rounded-lg py-[2px] px-[2px] transition duration-300 ${mode === 'dark' ? 'border-[#EBEBEB] dark-button-hover' : 'border-[#212121] light-button-hover'}`}
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/claudio-s-moura/"
              target="_blank"
              rel="noreferrer"
              className={`border-2 rounded-lg py-[2px] px-[2px] transition duration-300 ${mode === 'dark' ? 'border-[#EBEBEB] dark-button-hover' : 'border-[#212121] light-button-hover'}`}
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <NavLinks className="" />
        <div className="h-20 w-full flex justify-between items-center py-4">
          <button
            className={`w-20 flex items-center justify-center py-[6px] font-semibold rounded-xl border-2 transition duration-300 hover:scale-110 ${mode === 'dark' ? 'border-[#EBEBEB] dark-button-hover' : 'border-[#212121] light-button-hover'}`}
          >
            Hire me
          </button>
          <button
            className={`w-20 flex items-center justify-center py-[6px] font-semibold rounded-xl border-2 transition duration-300 hover:scale-110 ${mode === 'dark' ? 'border-[#EBEBEB] dark-button-hover' : 'border-[#212121] light-button-hover'}`}
          >
            CV
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col mx-auto mb-4 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'} font-inter font-medium appearing`}
      >
        <p className="text-sm mt-[2px] leading-loose">
          E: claudiohenrique0909@gmail.com
        </p>
        <p className="text-sm mt-[2px] leading-loose">
          T: +55 (21) 966 567 171
        </p>
      </div>
    </aside>
  )
}
