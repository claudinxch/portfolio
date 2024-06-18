import { useTheme } from '../contexts/theme'
import { RepositoriesInterface } from '../interfaces/repositories-interface'
import { Title } from './title'
import { X } from 'lucide-react'

interface ModalProps {
  content: RepositoriesInterface
  closeModal: () => void
}

export const Modal = ({ content, closeModal }: ModalProps) => {
  const { mode } = useTheme()

  return (
    <div className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#101010]/30 z-10  justify-center">
      <div
        className={`flex flex-col relative w-[800px] h-[700px] my-auto rounded-xl p-12 ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#181818]' : 'text-[#101010] bg-[#EFF1F5]'}`}
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
          <p className="">{content.description}</p>
          <div className="flex justify-center gap-10 w-full mt-4">
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
