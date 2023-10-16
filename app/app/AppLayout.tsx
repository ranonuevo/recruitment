'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import AppTopBar from '@/components/global/AppTopBar'
import AppSideBar from '@/components/global/AppSideBar'
import AppNotificationContent from '@/components/global/AppNotificationContent'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()

  const isRecruiter = session?.user?.role === 'recruiter'? true : false
  const [isOpen, setIsOpen] = useState<boolean>(isRecruiter)

  return (
    <main className='min-h-screen grid grid-cols-[80px_minmax(0,1fr)]'>
      <AppSideBar />

      <div>
        <div 
          className={`px-7 transition-[margin-right] duration-500 ${isOpen? 'mr-[320px]' : 'mr-0'}`}
          id='content'
        >
          <AppTopBar user={session?.user} />
          
          {children}
        </div>

        <AppNotificationContent isOpen={isOpen} isRecruiter={isRecruiter} setIsOpen={setIsOpen} />
      </div>
    </main>
  )
}
