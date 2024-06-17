import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/theme'
import { useState, useEffect } from 'react'

export const ModeButton = () => {
  const { mode, toggleMode } = useTheme()
  const icon = mode === 'dark' ? <Sun color="#EFF1F5" /> : <Moon />
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1000) // Duration of the animation
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const handleClick = () => {
    toggleMode()
    setIsAnimating(true)
  }

  return (
    <button
      className={`self-end p-2 transition-transform ${isAnimating ? 'animate-[rotate_1s_ease-in-out]' : ''}`}
      title={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      onClick={handleClick}
    >
      {icon}
    </button>
  )
}
