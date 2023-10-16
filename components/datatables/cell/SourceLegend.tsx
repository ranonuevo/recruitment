type SourceLegendProps = {
  isResponded: boolean
  className?: string
}

export default function SourceLegend ({
  isResponded,
  className = ''
}: SourceLegendProps) {
  return (
    <span 
      className={`h-2 w-2 rounded-full ${isResponded? 'bg-primary' : 'bg-[#b41617]'} ${className} `}
    ></span>
  )
}