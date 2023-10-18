'use client'

import { useEffect, useState } from 'react'
import AppTopBar from '@/components/global/AppTopBar'
import AppSideBar from '@/components/global/AppSideBar'
import AppRightPanelBar from '@/components/global/AppRightPanelBar'
import clx from '@/utils/clx'
import AppContextProvider from '@/hooks/useAppContext'

type AppLayoutProps = {
  children: React.ReactNode,
  session: any
}

export default function AppLayout({
  children,
  session
}: AppLayoutProps) {
  const { isRecruiter, user } = session
  const [isOpen, setIsOpen] = useState<boolean>(isRecruiter)

  useEffect(() => {
    setIsOpen(isRecruiter)
  }, [isRecruiter])

  return (
    <AppContextProvider session={session}>
      <main className='min-h-screen grid grid-cols-[80px_minmax(0,1fr)]'>
        <AppSideBar />

        <div>
          <div 
            className={clx(
              'px-7 transition-[margin-right] duration-500',
              isOpen? 'mr-[450px]' : 'mr-0'
            )}
            id='content'
          >
            <AppTopBar user={user} />
            
            {children}
          </div>

          <AppRightPanelBar 
            isOpen={isOpen} 
            isRecruiter={isRecruiter} 
            setIsOpen={setIsOpen} 
          />
        </div>
      </main>
    </AppContextProvider>
  )
}
