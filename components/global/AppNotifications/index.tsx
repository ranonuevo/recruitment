import AppTabs from '@/components/global/AppTabs'
import NotificationRows from './NotificationRows'

const items1 = [
  {
    id: 51,
    name: 'Robert Lee',
    activityName: 'Aptitude Test',
    desc: 'has completed',
    hasResult: true,
    hasScheduleIterview: true,
    createdDate: 'Now'
  },
  {
    id: 52,
    name: 'Shelie Cruz',
    desc: 'has',
    activityName: 'accepted interview invitation',
    hasResult: false,
    hasFinalReview: false,
    createdDate: '25m ago'
  },
  {
    id: 53,
    name: 'JHhon Deo',
    desc: 'has uploaded resume',
    activityName: 'Aptitude Test',
    hasResult: true,
    hasFinalReview: true,
    createdDate: '1h ago'
  }
]

const items2 = [
  {
    id: 50,
    name: 'Dee Kennie',
    desc: 'has',
    activityName: 'decline interview invitation',
    alert: true,
    hasResult: false,
    hasFinalReview: false,
    createdDate: 'now'
  },
  ...items1,
  {
    id: 54,
    name: 'Jane Beth',
    desc: 'has',
    activityName: 'decline interview invitation',
    alert: true,
    hasResult: false,
    hasFinalReview: false,
    createdDate: '3h ago'
  },
]

export default function AppNotifications () {
  const tabs = [
    {
      code: 'TAB-UNREAD',
      title: 'Unread',
      content: <NotificationRows items={items1} />
    },
    {
      code: 'TAB-All',
      title: 'All',
      content: <NotificationRows items={items2} />
    }
  ]

  return (
    <div className='bg-white p-3'>
      <h2 className='text-lg font-bold mb-2'>Notification</h2>

      <AppTabs 
        items={tabs}
      />
    </div>
  )
}