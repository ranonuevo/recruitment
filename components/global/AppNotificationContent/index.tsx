'use client'


import { ChevronLeft, ChevronRight } from 'lucide-react'

type AppNotificationContentProps = {
  isOpen: boolean
  isRecruiter: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AppNotificationContent ({
  isOpen,
  isRecruiter,
  setIsOpen
}: AppNotificationContentProps) {
  
  return (
    <div 
      className={`${isOpen? 'w-[320px]' : 'w-0'} min-h-screen bg-gray-400 fixed top-0 right-0 transition-all duration-500`}
      id='right-content'
    >
      <div className='relative min-h-screen w-full'>
        {
          isRecruiter? (
            <div className='absolute left-[-20px] top-0 cursor-pointer' onClick={() => setIsOpen((oldVal) => !oldVal)}>
              { isOpen? <ChevronRight /> : <ChevronLeft /> }
            </div>
          ) : ''
        }

        notification
      </div>
    </div>
  )
}