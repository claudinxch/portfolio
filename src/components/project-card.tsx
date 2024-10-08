import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/theme'
import type { Repository } from './data/repositories'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  repo: Repository
  openModal: () => void
}

export const ProjectCard = ({ repo, openModal }: ProjectCardProps) => {
  const { mode } = useTheme()
  const {
    i18n: { language },
  } = useTranslation()

  const handleOpenModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // Check if the clicked element is an anchor tag so it does not open modal
    const target = event.target as HTMLElement
    if (target.closest('a')) {
      return
    }
    openModal()
  }

  return (
    <div
      onClick={handleOpenModal}
      className={`group flex relative w-[350px] max-h-[250px] gap-4 p-4 border-[1px] rounded transition-all duration-300 cursor-pointer hover:-translate-y-[2px] ${mode === 'dark' ? 'border-slate-200/5 hover:bg-zinc-800/20' : 'border-[#D4D4D4] hover:bg-zinc-200/50'} lg:w-[600px]`}
    >
      <div className="hidden max-h-[120px] overflow-hidden lg:block">
        <img
          src={repo.image}
          alt={repo.imageAlt}
          width={240}
          height={48}
          loading="lazy"
          className="rounded border-2 border-[#E040FB]/30 object-fill h-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]">
          <a
            href={repo.projectLink}
            target="_blank"
            rel="noreferrer"
            className="group cursor-default"
          >
            <span>{repo.title}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style={{ stopColor: '#EC4899', stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: '#8B5CF6', stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#grad1)"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
        </h3>
        <p
          className={`max-w-[310px] max-h-[126px] leading-normal text-sm ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
        >
          {language === 'en'
            ? repo.englishDescription
            : repo.portugueseDescription}
        </p>
        <div className="h-4 flex gap-1 mt-2 items-center">
          {repo.technologies.map((tech, i) => (
            <span
              key={i}
              className={`py-[1px] px-[8px] rounded-full text-sm font-light ${mode === 'dark' ? 'bg-[#EFF1F5]/5 text-[#EFF1F5]' : 'bg-[#101010]/5 text-[#101010]'}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className={`flex ml-1 mt-2 gap-6 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
        >
          <a
            href={repo.projectLink}
            target="_blank"
            rel="noreferrer"
            className="cursor-default"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={repo.repositoryLink}
            target="_blank"
            rel="noreferrer"
            className="cursor-default"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <button className="absolute hidden text-[#101010] text-base -top-2 right-8 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-md px-2 click-me-appear group-hover:flex">
        {language === 'en' ? 'click me!' : 'clique!'}
      </button>
    </div>
  )
}
