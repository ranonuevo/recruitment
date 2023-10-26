import AvatarProfile from '@/components/global/AppAvatar'
import clx from '@/utils/clx'
import { Button } from '@/components/ui/button'

type NotificationRowsProps = {
  items: any
}
export default function NotificationRows ({
  items
}: NotificationRowsProps) {

  return (
    <ul className='px-2'>
      {
        items.map((item: any, index: number) => {
          return (
            <li key={`notification-${item.id}-${index}`} className='flex gap-4 items-start py-2'>
              <div className='mt-2'>
                <AvatarProfile 
                  name={item.name}
                />
              </div>

              <div className='flex-1'>
                <span className='font-bold'>{ item.name }</span> {' '}
                
                { item.desc} {' '}
                <span 
                  className={clx(
                    'font-bold',
                    item.alert? 'text-[red]' : ''
                  )}
                >
                  { item.activityName }
                </span>

                <div className='flex gap-2 mt-4'>
                  { item.hasResult && <Button size='xs'>View Result</Button> }
                  { item.hasScheduleIterview && <Button size='xs'>Schedule Interview</Button> }
                  { item.hasFinalReview && <Button size='xs'>Final Review</Button> }
                </div>
              </div>

              <div className='text-gray-400 text-xs text-right'>
                { item.createdDate }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}