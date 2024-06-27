import { X } from 'lucide-react'
import { useTheme } from '../contexts/theme'
import { useContactModal } from '../contexts/contact-modal'

export const ContactModal = () => {
  const { mode } = useTheme()
  const { handleModalState } = useContactModal()
  return (
    <div className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#101010]/30 z-40 justify-center">
      <div
        className={`flex flex-col relative w-[80%] h-[700px] my-auto rounded-xl p-12 ${mode === 'dark' ? 'text-[#EFF1F5] bg-[#181818]' : 'text-[#101010] bg-[#EFF1F5]'} animate-[in_0.4s] lg:w-[800px]`}
      >
        <button onClick={() => handleModalState(false)}>
          <X
            className={`absolute top-1 right-0 rounded-full p-1 ${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'}`}
            size={40}
          />
        </button>
      </div>
    </div>
  )
}
