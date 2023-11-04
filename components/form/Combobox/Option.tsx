import clx from '@/utilities/clx'

type OptionProps = {
  children: React.ReactNode
  onClick?: any,
  isSelected?: boolean,
  className?: string
}


export default function Option({
  children,
  onClick,
  isSelected = false,
  className = ''
}: OptionProps) {
  return (
    <li 
      className={clx(
        'w-full rounded-sm px-2 py-1.5 text-sm outline-none',
        'flex items-center gap-2 cursor-pointer',
        'hover:bg-slate-100 hover:text-slate-900',
        {
          'pl-8': !isSelected 
        },
        className
      )}
      onMouseDown={(event) => {
        event.preventDefault()
        event.stopPropagation()
      }}
      onClick={onClick}
    >
      { children }
    </li>
  )
}