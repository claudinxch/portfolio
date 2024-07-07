import type { Icon } from './css-icon'

export const JavaScriptIcon = ({ width }: Icon) => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 32 32"
        width={width}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="url(#grad1)"
            d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"
          ></path>
        </g>
      </svg>
      <p className="opacity-0 absolute -left-1 -top-7 p-1 px-2 text-sm text-[#121212] font-medium bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded transition duration-200 group-hover:opacity-100">
        JavaScript
      </p>
    </div>
  )
}
