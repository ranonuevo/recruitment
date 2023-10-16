import SourceLegend from './SourceLegend'

type DataTableCellSourceProps = {
  data: any
}

export default function DataTableCellSource ({
  data
}: DataTableCellSourceProps) {
  const info = data.getValue()
  const isObject = typeof info === 'object'

  let from = ''

  if (isObject) {
    from = info.from
  } else {
    from = info
  }

  const WithIndicator = () => (
    <div className='flex items-center'>
      <span className='whitespace-nowrap mr-2'>{ from }</span>
      <SourceLegend isResponded={info?.virtualRobotResponded === true} />
    </div>
  )

  return (
    <div className=''>
      { isObject?  <WithIndicator/> : from }      
    </div>
  )
}