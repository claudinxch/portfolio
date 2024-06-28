import { ChevronDown, X } from 'lucide-react'
import { useTheme } from '../contexts/theme'
import { useContactModal } from '../contexts/contact-modal'
import { SecondaryButton } from './secondary-button'

export const ContactModal = () => {
  const { mode } = useTheme()
  const { handleModalState } = useContactModal()
  return (
    <div className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#101010]/30 z-40 justify-center">
      <div
        className={`flex flex-col relative w-[80%] h-fit my-auto rounded-xl p-12 ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#181818]' : 'text-[#101010] bg-[#EFF1F5]'} animate-[in_0.4s] lg:w-[800px]`}
      >
        <button onClick={() => handleModalState(false)}>
          <X
            className={`absolute top-1 right-0 rounded-full p-1 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
            size={40}
          />
        </button>
        <h3 className="inline-flex text-2xl tracking-tight gap-3">
          Write me a message <ChevronDown size={28} className="self-center" />
        </h3>

        <form className="flex flex-col mt-6 gap-9">
          <div>
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Name"
              required
              aria-invalid="true"
              className={`pb-4 w-full outline-none bg-transparent placeholder-[#A5A5A5] border-b-2 border-[#A5A5A5] transition-colors duration-200 ${mode === 'dark' ? 'text-[#EFF1F5] focus:placeholder-[#EFF1F5] focus:border-[#EFF1F5]' : 'text-[#101010] focus:placeholder-[#101010] focus:border-[#101010]'}`}
            />
          </div>
          <div>
            <input
              type="email"
              name="from_email"
              id="from_email"
              placeholder="Email"
              required
              className={`pb-4 w-full outline-none bg-transparent placeholder-[#A5A5A5] border-b-2 border-[#A5A5A5] transition-colors duration-200 ${mode === 'dark' ? 'text-[#EFF1F5] focus:placeholder-[#EFF1F5] focus:border-[#EFF1F5]' : 'text-[#101010] focus:placeholder-[#101010] focus:border-[#101010]'}`}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              aria-invalid="true"
              className={`pb-4 h-[120px] w-full outline-none resize-none bg-transparent placeholder-[#A5A5A5] border-b-2 border-[#A5A5A5] transition-colors duration-200 ${mode === 'dark' ? 'text-[#EFF1F5] focus:placeholder-[#EFF1F5] focus:border-[#EFF1F5]' : 'text-[#101010] focus:placeholder-[#101010] focus:border-[#101010]'}`}
            ></textarea>
          </div>
          <div className="flex items-center mt-5">
            <SecondaryButton btnTitle="Send message" className="p-5" />
          </div>
        </form>
      </div>
    </div>
  )
}
