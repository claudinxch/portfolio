import { Icons } from './css-icon'

export const TailwindIcon = ({ width, strokeColor }: Icons) => {
  return (
    <div className="relative">
      <svg
        fill={strokeColor || 'url(#grad1)'}
        width={width}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
          ></path>
        </g>
      </svg>
      <p className="opacity-0 absolute -left-3 -top-7 p-1 px-2 text-sm text-[#121212] font-medium bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded transition duration-200 group-hover:opacity-100">
        TailwindCSS
      </p>
    </div>
  )
}
