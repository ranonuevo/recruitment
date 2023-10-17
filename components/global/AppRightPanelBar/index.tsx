'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import AppNotifications from '@/components/global/AppNotifications'
import AppUpcomingEvents from '@/components/global/AppUpcomingEvents'
import clx from '@/utils/clx'

type AppRightPanelBarProps = {
  isOpen: boolean
  isRecruiter: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AppRightPanelBar ({
  isOpen,
  isRecruiter,
  setIsOpen
}: AppRightPanelBarProps) {
  
  return (
    <div 
      className={clx(
        'h-screen bg-[#eeedfc] transition-all duration-500',
        'fixed top-0 right-0',
        isOpen? 'w-[450px]' : 'w-0'
      )}
    >
      {
        isRecruiter? (
          <div className='absolute left-[-20px] top-0 cursor-pointer' onClick={() => setIsOpen((oldVal) => !oldVal)}>
            { isOpen? <ChevronRight /> : <ChevronLeft /> }
          </div>
        ) : ''
      }

      <div className='relative h-screen w-full p-4 overflow-y-auto'>
        <div className=''>
          <div className='mb-5'>
            <AppNotifications />
          </div>
          <div>
            <AppUpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  )
}