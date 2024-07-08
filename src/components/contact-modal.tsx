import { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react'
import { ChevronDown, CircleCheckBig, LoaderCircle, X } from 'lucide-react'
import { useTheme } from '../contexts/theme'
import { useContactModal } from '../contexts/contact-modal'
import { SecondaryButton } from './secondary-button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from 'tailwind-merge'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

// Email.JS params
const service: string = import.meta.env.VITE_SERVICE_ID
const template: string = import.meta.env.VITE_TEMPLATE_ID
const key: string = import.meta.env.VITE_API_KEY

// Define a schema for the contact form using Zod
// This schema specifies the expected structure and validation rules for the form data
const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export const ContactModal = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const { mode } = useTheme()
  const { handleModalState } = useContactModal()
  const {
    i18n: { language },
  } = useTranslation()

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  // Function to close modal with click outside the div with content
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      handleModalState(false)
    }
  }

  // Send email with EmailJS
  const handleContactSubmit: SubmitHandler<ContactFormSchema> = async (
    data,
  ) => {
    try {
      await emailjs.send(service, template, data, key)
      reset()
      setTimeout(() => {
        handleModalState(false)
      }, 1750)
    } catch (err) {}
  }

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
          handleModalState(false)
        }
      }}
      onClick={handleClickOutside}
      className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#101010]/30 z-40 justify-center"
    >
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
          {language === 'en' ? 'Write me a message' : 'Escreva me uma mensagem'}
          <ChevronDown size={28} className="self-center" />
        </h3>

        <form
          onSubmit={handleSubmit(handleContactSubmit)}
          className="flex flex-col mt-6 gap-9"
        >
          <div>
            <input
              {...register('name')}
              type="text"
              placeholder={language === 'en' ? 'Name' : 'Nome'}
              aria-invalid="true"
              className={twMerge(
                'pb-4 w-full outline-none bg-transparent placeholder-[#A5A5A5] border-b-2 border-[#A5A5A5] transition-colors duration-200',
                mode === 'dark'
                  ? 'text-[#EFF1F5] focus:placeholder-[#EFF1F5] focus:border-[#EFF1F5]'
                  : 'text-[#101010] focus:placeholder-[#101010] focus:border-[#101010]',
                errors?.name &&
                  'placeholder-[#CB0303] border-[#CB0303] focus:placeholder-[#CB0303] focus:border-[#CB0303]',
                isSubmitSuccessful &&
                  'placeholder-emerald-500 border-emerald-500',
              )}
            />
          </div>
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className={twMerge(
                'pb-4 w-full outline-none bg-transparent placeholder-[#A5A5A5] border-b-2 border-[#A5A5A5] transition-colors duration-200',
                mode === 'dark'
                  ? 'text-[#EFF1F5] focus:placeholder-[#EFF1F5] focus:border-[#EFF1F5]'
                  : 'text-[#101010] focus:placeholder-[#101010] focus:border-[#101010]',
                errors?.email &&
                  'placeholder-[#CB0303] border-[#CB0303] focus:placeholder-[#CB0303] focus:border-[#CB0303]',
                isSubmitSuccessful &&
                  'placeholder-emerald-500 border-emerald-500',
              )}
            />
          </div>
          <div>
            <textarea
              {...register('message')}
              placeholder={language === 'en' ? 'Message' : 'Mensagem'}
              aria-invalid="true"
              className={twMerge(
                'pb-4 h-[120px] w-full outline-none resize-none bg-transparent placeholder-[#A5A5A5] border-b-2 border-[#A5A5A5] transition-colors duration-200',
                mode === 'dark'
                  ? 'text-[#EFF1F5] focus:placeholder-[#EFF1F5] focus:border-[#EFF1F5]'
                  : 'text-[#101010] focus:placeholder-[#101010] focus:border-[#101010]',
                errors?.message &&
                  'placeholder-[#CB0303] border-[#CB0303] focus:placeholder-[#CB0303] focus:border-[#CB0303]',
                isSubmitSuccessful &&
                  'placeholder-emerald-500 border-emerald-500',
              )}
            ></textarea>
          </div>
          <div className="flex items-center mt-5">
            <SecondaryButton
              disabled={isSubmitting && isSubmitSuccessful}
              type="submit"
              btnTitle={
                isSubmitting ? (
                  <LoaderCircle
                    size={30}
                    color={mode === 'dark' ? '#EFF1F5' : '#101010'}
                    className="animate-spin"
                  />
                ) : isSubmitSuccessful ? (
                  <CircleCheckBig size={30} color="#10B981" />
                ) : language === 'en' ? (
                  'Send message'
                ) : (
                  'Enviar mensagem'
                )
              }
              className={twMerge(
                'p-5 min-w-[212px] w-fit h-[76px]',
                isSubmitSuccessful && 'border-emerald-500',
              )}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
