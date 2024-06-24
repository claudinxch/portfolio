import { IconsInterface } from '../../interfaces/icons-interface'

export const HTMLIcon = ({
  width,
  strokeColor,
  strokeWidth,
}: IconsInterface) => {
  return (
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
  )
}
