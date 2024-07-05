import { Github, Linkedin } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../contexts/theme'

export const FollowMeBox = () => {
  const { mode } = useTheme()
  return (
    <div className="hidden absolute right-0 bottom-40 float-right w-6 appearing-from-right lg:block">
      <div
        className={twMerge(
          "pr-[75px] absolute bottom-full right-0 text-[14px] leading-[24px] h-[24px] whitespace-nowrap text-right rotate-90 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[50px] after:h-[1px]",
          mode === 'dark'
            ? 'text-[#2C2C2C] after:bg-[#2C2C2C]'
            : 'text-[#BBBBBB] after:bg-[#BBBBBB]',
        )}
      >
        Follow me
      </div>
      <div
        className={twMerge(
          'absolute flex flex-col mt-[70px] gap-2 right-0 pr-[58px]',
          mode === 'dark' ? 'text-[#2C2C2C]' : 'text-[#BBBBBB]',
        )}
      >
        <a
          href="https://github.com/claudinxch"
          target="_blank"
          rel="noreferrer"
          className="text-center"
        >
          <Github strokeWidth={1.25} />
        </a>
        <a
          href="https://linkedin.com/in/claudio-s-moura"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin strokeWidth={1.25} />
        </a>
      </div>
    </div>
  )
}
