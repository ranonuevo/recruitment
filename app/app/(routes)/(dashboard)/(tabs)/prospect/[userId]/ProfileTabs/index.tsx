'use client'

import AppTabs from '@/components/global/AppTabs'
import Engagement from './Engagement'

type ProfileTabsProps = {
}
export default function ProfileTabs ({}: ProfileTabsProps) {
  const tabs = [
    {
      code: 'TAB-ALL-DETAILS',
      title: 'All Details',
      content: ''
    },
    {
      code: 'TAB-ENGAGEMENT',
      title: 'Engagement',
      content: <Engagement />
    }
  ]

  return (
    <div className='my-10 p-5 bg-white'>
      <AppTabs 
        items={tabs}
        variant='inline'
        defaultTabSelected='TAB-ENGAGEMENT'
      />
    </div>
  )
}
