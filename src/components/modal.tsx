import { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/theme'
import { RepositoriesInterface } from '../interfaces/repositories-interface'
import { Title } from './title'
import { ExternalLink, Github, X } from 'lucide-react'

interface ModalProps {
  content: RepositoriesInterface
  closeModal: () => void
}

export const Modal = ({ content, closeModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { mode } = useTheme()
  const {
    i18n: { language },
  } = useTranslation()

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      closeModal()
    }
  }

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
          closeModal()
        }
      }}
      onClick={handleClickOutside}
      className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#101010]/30 z-10 justify-center"
    >
      <div
        className={`flex flex-col relative w-[80%] h-[725px] my-auto rounded-xl p-12 ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#181818]' : 'text-[#101010] bg-[#EFF1F5]'} animate-[in_0.4s] lg:w-[800px]`}
      >
        <button onClick={closeModal}>
          <X
            className={`absolute top-1 right-0 rounded-full p-1 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
            size={40}
          />
        </button>
        <div
          className={`flex rounded-xl overflow-hidden h-[410px] border-2 border-[#E040FB]/10 ${mode === 'dark' ? 'shadow-[0_15px_60px_-20px_rgba(0,0,0,0.3)]' : 'shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)]'} shadow-[#E040FB]/40`}
        >
          <video
            src={content.video}
            controls
            loop
            autoPlay={true}
            muted
            className="object-cover h-full w-full"
          ></video>
        </div>
        <div className="mt-11">
          <Title className="text-xl font-inter font-semibold w-fit border-none">
            {content.title}
          </Title>
          <p className="">
            {language === 'en'
              ? content.englishDescription
              : content.portugueseDescription}
          </p>
          <div
            className={`flex w-full gap-6 mt-2 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
          >
            <a
              href={content.projectLink}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer flex gap-2 transition-colors duration-150 ${mode === 'dark' ? 'hover:text-[#494949]' : 'hover:text-[#9C9C9C]'}`}
            >
              Website <ExternalLink size={22} />
            </a>
            <a
              href={content.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer flex gap-2 transition-colors duration-150 ${mode === 'dark' ? 'hover:text-[#494949]' : 'hover:text-[#9C9C9C]'}`}
            >
              {language === 'en' ? 'Repository' : 'Repositório'}
              <Github size={22} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-full mt-4 md:gap-8 lg:gap-10 md:flex-nowrap">
            {content.technologies.map((tech, i) => (
              <span
                key={i}
                className={`py-1 px-5 rounded-full text-base leading-tight font-medium ${mode === 'dark' ? 'bg-[#EFF1F5]/5 text-[#EFF1F5]' : 'bg-[#101010]/5 text-[#101010]'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
