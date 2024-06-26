interface ExpBoxProps {
  src: string | undefined
  title: string | undefined
  from: string
  to: string
  description: string
}

export const ExpBox = ({ src, title, from, to, description }: ExpBoxProps) => {
  return (
    <div className="flex gap-4 items-center p-2 transition-colors duration-300 rounded cursor-default hover:bg-zinc-800/20">
      <img
        src={src}
        alt=""
        width={240}
        height={48}
        loading="lazy"
        className="rounded border-2 border-[#E040FB]/30 object-fill h-full"
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h5 className="inline text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#8b5cf6] font-">
            {title}
          </h5>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {from} — {to}
          </span>
        </div>
        <p className="text-[#EFF1F5] text-base tracking-tighter">
          {description}
        </p>
      </div>
    </div>
  )
}
