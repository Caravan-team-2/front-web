import { Eye, EyeOff } from 'lucide-react'

export type EyeIconProps = {
  isVisible: boolean
  onClick: () => void
  className?: string
  size?: number
}

export function EyeIcon({ isVisible, onClick, className = '', size = 18 }: EyeIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-gray-400 hover:text-gray-600 transition-colors ${className}`}
      aria-label={isVisible ? 'Hide password' : 'Show password'}
    >
      {isVisible ? <EyeOff size={size} /> : <Eye size={size} />}
    </button>
  )
}