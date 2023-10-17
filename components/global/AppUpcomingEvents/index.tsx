import AppTabs from '@/components/global/AppTabs'
import { Button } from '@/components/ui/button'
import EventRows from './EventRows'

const items1 = [
  {
    id: 1,
    title: 'University Event',
    location: 'University',
    date: 'Today',
    time: '09:00 - 11:00',
    color: '#26c0e2'
  },
  {
    id: 2,
    title: 'Interview Meeting - Alic Cheung',
    location: 'HK Coffee Shop',
    date: '21 Nov',
    time: '13:00 - 14:00',
    color: '#ef36ff'
  },
  {
    id: 3,
    title: 'Seminar',
    location: 'IFC',
    date: '01 Dec',
    time: '09:00 - 11:00',
    color: '#26c0e2'
  },
] 

const items2 = [
  ...items1,
  {
    id: 4,
    title: 'Event X',
    location: 'Office X',
    date: '02 Dec',
    time: '13:30 - 18:00',
    color: '#ef36ff'
  },
]

export default function AppUpcomingEvents () {
  const tabs = [
    {
      code: 'TAB-TODAY',
      title: 'Today',
      content: <EventRows items={items1} />
    },
    {
      code: 'TAB-THIS-WEEK',
      title: 'This Week',
      content: <EventRows items={items2} />
    }
  ]

  return (
    <div className='bg-white p-3'>

      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-lg font-bold'>Upcoming Events</h2>
        <Button variant='outline'>View All</Button>
      </div>
      

      <AppTabs 
        items={tabs}
      />
    </div>
  )
}