import { ComponentProps } from 'react'
import { useSection } from '../contexts/section'

interface NavLinksInterface extends ComponentProps<'div'> {
  className: string
}

export const NavLinks = ({ className, ...props }: NavLinksInterface) => {
  const { changeId } = useSection()
  return (
    <div
      {...props}
      className={`flex flex-col justify-between h-56 text-xl font-medium py-4 w-full ${className || ''}`}
    >
      <span
        onClick={() => changeId(0)}
        className="w-1/2 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        Home
      </span>
      <span
        onClick={() => changeId(1)}
        className="w-1/2 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        Projects
      </span>
      <span
        onClick={() => changeId(2)}
        className="w-1/2 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        Skills
      </span>
      <span
        onClick={() => changeId(3)}
        className="w-1/2 border-b-2 border-[#DEDEDE] rounded-r cursor-pointer transition-colors duration-200 hover:text-[#A5A5A5] hover:border-[#A5A5A5]"
      >
        About me
      </span>
    </div>
  )
}
