import { useTheme } from '../contexts/theme'

export const ProfilePic = () => {
  const { mode } = useTheme()
  return (
    <div
      className={`h-[200px] w-[200px] rounded-full border-2 overflow-hidden transition-colors duration-500 ${mode === 'dark' ? 'border-[#212121]' : 'border-[#EBEBEB]'}`}
    >
      <img
        src="/img/myphoto.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  )
}
