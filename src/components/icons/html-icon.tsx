import { Icon } from './css-icon'

export const HTMLIcon = ({ width, strokeColor, strokeWidth }: Icon) => {
  return (
    <div className="relative">
      <svg
        width={width}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z"
            stroke={strokeColor || 'url(#grad1)'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17 7H7.5L8 11.5H16L15.5 17L12 18L8.5 17L8.25 14.5"
            stroke={strokeColor || 'url(#grad1)'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
      <p className="opacity-0 absolute left-3 -top-7 p-1 px-2 text-sm text-[#121212] font-medium bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded transition duration-200 group-hover:opacity-100">
        HTML
      </p>
    </div>
  )
}
