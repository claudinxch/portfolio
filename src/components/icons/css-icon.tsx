export interface Icon {
  width: number
  strokeColor?: string
  strokeWidth?: string
}

export const CSSIcon = ({ width, strokeColor, strokeWidth }: Icon) => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 24 24"
        width={width}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z"
            stroke={'url(#grad1)' || strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7 7H16.5L15.5 17L12 18L8.5 17L8.25 14.5"
            stroke={'url(#grad1)' || strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M16 11.5H7.5"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
      <p className="opacity-0 absolute left-4 -top-7 p-1 px-2 text-sm text-[#121212] font-medium bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded transition duration-200 group-hover:opacity-100">
        CSS
      </p>
    </div>
  )
}
