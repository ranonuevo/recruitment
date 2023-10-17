import clx from '@/utils/clx'

type EventRowsProps = {
  items: any
}
export default function EventRows ({
  items
}: EventRowsProps) {

  return (
    <ul className='px-2 max-h-[300px] overflow-y-auto'>
      {
        items.map((item: any, index: number) => {
          return (
            <li key={`notification-${item.id}-${index}`} className='flex gap-4 items-start py-2'>
              <div className='mt-2'>
                <div className={clx(
                  'rounded-full h-3 w-3'
                )}
                style={{ backgroundColor: item.color }}
              ></div>
              </div>

              <div className='flex-1'>
                <div className='font-bold'>{ item.title }</div>
                <div className='text-gray-400 text-xs'>{ item.location}</div>
              </div>

              <div className='text-right'>
                <div className=''>{ item.date }</div>
                <div className='text-xs text-gray-400'>{ item.time }</div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}